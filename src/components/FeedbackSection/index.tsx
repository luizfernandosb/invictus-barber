import { useState } from "react";
import { FeedbackForm } from "./FeedbackForm";
import { FeedbackSuccess } from "./FeedbackSuccess";

export default function FeedbackSection() {
  const [showedForm, setShowedForm] = useState<"feedback" | "success">(
    "success",
  );

  return (
    <>
      {showedForm == "feedback" && (
        <FeedbackForm onSuccess={() => setShowedForm("success")} />
      )}
      {showedForm == "success" && (
        <FeedbackSuccess
          onSendNewFeedback={() => setShowedForm("feedback")}
        />
      )}
    </>
  );
}
