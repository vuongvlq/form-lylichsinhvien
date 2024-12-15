import './App.css'

function App() {

  return (
    <div className="container">
      <h1>Form Khai Báo Lý Lịch Sinh Viên</h1>
      <form>
        <h2>Thông tin cá nhân</h2>
        <div className="row">
          <div className="column">
            <label htmlFor="fullname">Họ và tên*:</label>
            <input type="text" id="fullname" name="fullname" placeholder="Nhập họ và tên" required />
          </div>
          <div className="column">
            <div className="row">
              <div className="column">
                <label htmlFor="dob">Ngày tháng năm sinh*:</label>
                <input type="date" id="dob" name="dob" required />
              </div>
              <div className="column">
                <label htmlFor="gender">Giới tính*:</label>
                <input type="radio" name="gender" title='Nam' /><span>Nam</span>
                <input type="radio" name="gender" title='Nam' /><span>Nữ</span>
                <input type="radio" name="gender" title='Nam' /><span>Khác</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <label htmlFor="ethnicity">Dân tộc*:</label>
            <input type="text" id="ethnicity" name="ethnicity" placeholder="Nhập dân tộc" required />
          </div>
          <div className="column">
            <label htmlFor="religion">Tôn giáo:</label>
            <input type="text" id="religion" name="religion" placeholder="Nhập tôn giáo" />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="row">
              <div className="column">
                <label htmlFor="idNumber">CCCD số*:</label>
                <input type="text" id="idNumber" name="idNumber" placeholder="Nhập số CCCD" required />
              </div>
              <div className="column">
                <label htmlFor="idIssueDate">Ngày cấp*:</label>
                <input type="date" id="idIssueDate" name="idIssueDate" required />
              </div>
            </div>
          </div>
          <div className="column">
            <label htmlFor="idIssuePlace">Nơi cấp*:</label>
            <input type="text" id="idIssuePlace" name="idIssuePlace" placeholder="Nhập nơi cấp" required />
          </div>
        </div>

        <h2>Thông tin liên hệ</h2>

        <label htmlFor="hometown">Quê quán*:</label>
        <input type="text" id="hometown" name="hometown" placeholder="Nhập quê quán" required />

        <label htmlFor="permanentAddress">Hộ khẩu thường trú*:</label>
        <input type="text" id="permanentAddress" name="permanentAddress" placeholder="Nhập hộ khẩu thường trú" required />

        <label htmlFor="temporaryAddress">Tạm trú:</label>
        <input type="text" id="temporaryAddress" name="temporaryAddress" placeholder="Nhập tạm trú" />
        <div className="row">
          <div className="column">
            <label htmlFor="phone">Số điện thoại*:</label>
            <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required />
          </div>
          <div className="column">
            <label htmlFor="email">Email*:</label>
            <input type="email" id="email" name="email" placeholder="Nhập email" required />
          </div>
        </div>
        <h2>Thông tin bố mẹ</h2>
        <div className="row">
          <div className="column">
            <label htmlFor="fatherName">Họ tên bố*:</label>
            <input type="text" id="fatherName" name="fatherName" placeholder="Nhập họ tên bố" required />
            <div className="row">
              <div className="column">
                <label htmlFor="fatherJob">Nghề nghiệp bố*:</label>
                <input type="text" id="fatherJob" name="fatherJob" placeholder="Nhập nghề nghiệp bố" required />
              </div>
              <div className="column">
                <label htmlFor="fatherDob">Ngày tháng năm sinh bố*:</label>
                <input type="date" id="fatherDob" name="fatherDob" required />
              </div>
            </div>
          </div>
          <div className="column">
            <label htmlFor="motherName">Họ tên mẹ*:</label>
            <input type="text" id="motherName" name="motherName" placeholder="Nhập họ tên mẹ" required />
            <div className="row">
              <div className="column">
                <label htmlFor="motherJob">Nghề nghiệp mẹ*:</label>
                <input type="text" id="motherJob" name="motherJob" placeholder="Nhập nghề nghiệp mẹ" required />
              </div>
              <div className="column">
                <label htmlFor="motherDob">Ngày tháng năm sinh mẹ*:</label>
                <input type="date" id="motherDob" name="motherDob" required />
              </div>
            </div>
          </div>
        </div>
        <button>Xóa Thông Tin</button>
        <button type="submit">Gửi Thông Tin</button>
      </form >
    </div >
  )
}

export default App
