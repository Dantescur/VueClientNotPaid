import { App } from "vue";

interface NotPaidOptions {
  dueDate: string;
  deadline: number;
}

const calculateOpacity = (options: NotPaidOptions): number => {
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

const VueClientNotPaid = {
  install(app: App, options: NotPaidOptions): void {
    app.config.globalProperties.$opacity = calculateOpacity(options);
  },
};

export default VueClientNotPaid;
