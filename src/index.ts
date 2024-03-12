import { App } from "vue";

interface NotPaidOptions {
  dueDate: string;
  deadline: number;
}

const VueClientNotPaid = {
  install(app: App, options: NotPaidOptions): void {
    const calculateOpacity = (): number => {
      const currentDate = new Date();
      const dueDate = new Date(options.dueDate);
      const deadlineDate = new Date(
        dueDate.getTime() + options.deadline * 24 * 60 * 60 * 1000,
      );

      if (currentDate > deadlineDate) {
        return 0;
      } else if (currentDate > dueDate) {
        const dayPastDue =
          (currentDate.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24);
        return (options.deadline - dayPastDue) / options.deadline;
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
  },
};

export default VueClientNotPaid;
