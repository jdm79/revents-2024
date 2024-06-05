import { Button } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { increment, incrementByAmount, decrement } from "./testSlice";
import { openModal } from "../../app/common/modals/modalSlice";

export default function Scratch() {
  const { data } = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Scratch Page</h1>
      <h3>The data is: {data}</h3>
      <Button onClick={() => dispatch(increment())} color='green' content='+' />
      <Button onClick={() => dispatch(decrement())} color='red' content='-' />
      <Button
        onClick={() => dispatch(incrementByAmount(5))}
        color='teal'
        content='+5'
      />
      <Button
        onClick={() => dispatch(incrementByAmount(-5))}
        color='yellow'
        content='-5'
      />
      <Button
        onClick={() => dispatch(openModal({ type: "TestModal", data: data }))}
        color='yellow'
        content='Open Modal'
      />
    </div>
  );
}
