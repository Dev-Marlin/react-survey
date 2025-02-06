import AnswersItem from "./AnswersItem";

export default function AnswersList({answerList}) {

  const data = Array.from(answerList);
  return (
    <ul>
      {data.map((answerItem) => (
        <AnswersItem answerItem={answerItem.form} key={answerItem.id} />
      ))}
    </ul>
  );
}
