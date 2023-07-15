import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gioitinh, setGioiTinh] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [date, setDate] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [errors, setErrors] = useState<any>();
  const [total, setTotal] = useState<number>(0);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);
  const isEmail = (email: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };
  const handleSubmit = () => {
    let isChecked: boolean = true;
    let newError: any = {};
    if (username.length === 0) {
      const errorName = "Không được để trống";
      newError = { name: errorName };
      isChecked = false;
    }
    if (email.length === 0) {
      const errorEmail = "Không được để trống";
      newError = { ...newError, email: errorEmail };
      isChecked = false;
    } else if (!isEmail(email)) {
      const errorEmail = "Không đúng định dạng";
      newError = { ...newError, email: errorEmail };
      isChecked = false;
    }
    if (date <= 0) {
      const errorDate = "Số phải lớn hơn 0 ";
      newError = { ...newError, date: errorDate };
      isChecked = false;
    }
    if (isChecked === false) {
      setIsDisplay(false);
      setErrors(newError);
    } else {
      setErrors([]);
      setIsDisplay(true);
      if (level === 1) {
        setTotal(1200 * date * level);
      } else if (level === 2) {
        setTotal(2400 * date * level);
      } else if (level === 3) {
        setTotal(3600 * date * level);
      }
    }
  };
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="">Họ tên </label>
          <input
            type="text"
            placeholder="Nhập họ và tên của bạn"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          {errors?.name ? <span>{errors.name}</span> : null}
        </div>
        <div>
          <label htmlFor="">Email </label>
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          {errors?.email ? <span>{errors.email}</span> : null}
        </div>
        <div>
          <label>Giới tính </label>
          <input
            type="radio"
            name="sex"
            id=""
            value={"Nam"}
            onChange={(event) => {
              setGioiTinh(event.target.value);
            }}
          />
          <label htmlFor="">Nam</label>
          <input
            type="radio"
            name="sex"
            id=""
            value={"Nữ"}
            onChange={(event) => {
              setGioiTinh(event.target.value);
            }}
          />
          <label htmlFor="">Nữ</label>
        </div>
        <div>
          <label htmlFor="">Cấp bậc </label>
          <select
            name=""
            id=""
            onChange={(event) => {
              setLevel(+event.target.value);
            }}
          >
            <option value="" hidden></option>
            <option value="1">Bậc 1</option>
            <option value="2">Bậc 2</option>
            <option value="3">Bậc 3</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Số ngày nằm viện </label>
          <input
            type="number"
            onChange={(event) => {
              setDate(+event.target.value);
            }}
          />
          {errors?.date ? <span>{errors.date}</span> : null}
        </div>
        <div>
          <label htmlFor="">Cán bộ </label>
          <select
            name=""
            id=""
            onChange={(event) => {
              setRole(event.target.value);
            }}
          >
            <option value="" hidden></option>
            <option value="Nhân Viên">Nhân viên</option>
            <option value="Cán bộ">Cán bộ</option>
            <option value="Quản lý">Quản lý </option>
          </select>
        </div>

        <input type="button" value="Check" onClick={handleSubmit} />
        {isDisplay ? (
          <div>
            {gioitinh === "Nam" ? (
              <p>
                Ông {username} bậc {level} là {role} được chi trả {total} tiền
                nằm viện
              </p>
            ) : (
              <p>
                Bà {username} bậc {level} là {role} được chi trả {total} tiền
                nằm viện
              </p>
            )}
          </div>
        ) : null}
      </form>
    </>
  );
};

export default Login;
