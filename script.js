function checkInput() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username !== "admin" || password !== "admin") {
      alert("Tài khoản hoặc mật khẩu không chính xác!");
      return false;
    } else {
      // Chuyển hướng trang tới trang tiếp theo
      window.location.href = "studentlist.html";
    }
  }
  
  let students = [
    {
      stt: 1,
      ten: "Nguyễn Văn A",
      tuoi: 20,
      diaChi: "Hà Nội",
      sdt: "123456789",
      email: "nguyenvana@example.com",
      lop: "CNTT",
    },
  
    {
      stt: 2,
      ten: "Nguyễn Văn B",
      tuoi: 21,
      diaChi: "Bắc Ninh",
      sdt: "012345678",
      email: "nguyenvanb@example.com",
      lop: "CNTT",
    },
  ];
  
  // Hiển thị danh sách Sinh viên
  function displayStudents() {
    const tableBody = document.getElementById("studentList");
    tableBody.innerHTML = "";
    students.forEach((student, index) => {
      const row = `<tr>
                          <td>${index + 1}</td>
                          <td>${student.ten}</td>
                          <td>${student.tuoi}</td>
                          <td>${student.diaChi}</td>
                          <td>${student.sdt}</td>
                          <td>${student.email}</td>
                          <td>${student.lop}</td>
                          <td>
                              <button onclick="editStudent(${index})">Sửa</button>
                              <button onclick="deleteStudent(${student.stt})">Xóa</button>
                          </td>
                      </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  function addStudent() {
    students.push({
      stt: 3,
      ten: "Nguyễn Văn C",
      tuoi: 22,
      diaChi: "Hà Nội",
      sdt: "123456789",
      email: "nguyenvanc@example.com",
      lop: "CNTT",
    });
  
    displayStudents();
  }
  
  // Sửa thông tin sinh viên
  function editStudent(index) {
    students[index].ten = "Lê Văn A";
    displayStudents();
  }
  
  // Xóa sinh viên
  function deleteStudent(studentSTT) {
    // Xóa sinh viên khỏi mảng students và cập nhật lại giao diện
  
    students = students.filter((e) => e.stt !== studentSTT);
    displayStudents();
  }
  
  // Gọi hàm hiển thị danh sách sinh viên khi trang được tải
  window.onload = displayStudents;