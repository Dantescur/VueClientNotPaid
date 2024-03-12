import { App } from "vue";

interface NotPaidOptions {
  dueDate: string;
  deadline: number;
}

class VueClientNotPaid {
  private dueDate: string;
  private deadline: number;

  constructor(options: NotPaidOptions) {
    this.dueDate = options.dueDate;
    this.deadline = options.deadline;
  }

  public install(app: App): void {
    const calculateOpacity = (): number => {
      const currentDate = new Date();
      const dueDate = new Date(this.dueDate);
      const deadlineDate = new Date(
        dueDate.getTime() + this.deadline * 24 * 60 * 60 * 1000,
      );

      if (currentDate > deadlineDate) {
        return 0;
      } else if (currentDate > dueDate) {
        const dayPastDue =
          (currentDate.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24);
        return (this.deadline - dayPastDue) / this.deadline;
      }
      return 1;
    };

    app.mixin({
      mounted() {
        this.$nextTick(() => {
          document.body.style.opacity = calculateOpacity().toString();
        });
      },
    });
  }
}

export default VueClientNotPaid;
