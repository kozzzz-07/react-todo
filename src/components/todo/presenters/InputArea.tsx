import { ChangeEvent, useCallback, useState, VFC } from "react";

export const InputArea: VFC = () => {
  console.log("InputArea Component");

  const [task, setTask] = useState("");

  const onChangeTask = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  }, []);

  return (
    <>
      <input type="text" name="task" onChange={onChangeTask} />
      <button disabled={task === ""}>追加</button>
    </>
  );
};
