import { useState } from "react";

const Header = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  //
  const [isDisplay2, setIsDisplay2] = useState<boolean>(false);
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [cacul, setCaCul] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const handleChange = (event: any) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    const yearNow = new Date();
    const ageNow = yearNow.getFullYear();
    setAge(Number(ageNow) - Number(date));
    setIsDisplay(true);
  };
  const handleClick = () => {
    if (cacul === "+") {
      setTotal(a + b);
      setIsDisplay2(true);
    } else if (cacul === "-") {
      setTotal(a - b);
      setIsDisplay2(true);
    } else if (cacul === "*") {
      setTotal(a * b);
      setIsDisplay2(true);
    } else if (cacul === "/") {
      setTotal(a / b);
      setIsDisplay2(true);
    }
  };
  return (
    <>
      <div>
        <input type="text" onChange={handleChange} />
        <input
          type="text"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />

        <input type="button" onClick={handleSubmit} value="Bấm" />
        {isDisplay ? (
          <h1>
            Tôi là {name} , tôi {age} tuổi
          </h1>
        ) : (
          ""
        )}
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            setA(+event.target.value);
          }}
        />
        <input
          type="text"
          onChange={(event) => {
            setB(+event.target.value);
          }}
        />
        <select
          name=""
          id=""
          onChange={(event) => {
            setCaCul(event.target.value);
          }}
        >
          <option value="" hidden></option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="button" value="Tính" onClick={handleClick} />
        {isDisplay2 ? <h1>Kết quả của phép tính là {total}</h1> : ""}
      </div>
    </>
  );
};
export default Header;
