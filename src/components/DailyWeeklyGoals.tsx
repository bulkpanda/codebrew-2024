import { FunctionComponent } from "react";
import "./DailyWeeklyGoals.css";

const DailyWeeklyGoals: FunctionComponent = () => {
  return (
    <section className="daily-weekly-goals">
      <div className="calorie-group">
        <div className="calorie5">
          <div className="information-part15" />
          <i className="daily-goals">Daily Goals</i>
        </div>
        <div className="calorie6">
          <div className="information-part16" />
          <i className="weekly-goals">Weekly Goals</i>
        </div>
      </div>
    </section>
  );
};

export default DailyWeeklyGoals;
