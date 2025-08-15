  let attendanceList = JSON.parse(localStorage.getItem("attendanceList")) || [];

    function loadTable() {
      let table = document.getElementById("attendanceTable");
      table.innerHTML = `
        <tr>
          <th>Student Name</th>
          <th>Student ID</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      `;
      attendanceList.forEach(entry => {
        let row = table.insertRow();
        row.insertCell(0).innerText = entry.name;
        row.insertCell(1).innerText = entry.id;
        row.insertCell(2).innerText = entry.date;
        row.insertCell(3).innerText = entry.time;
      });
    }

    function markAttendance() {
      let name = document.getElementById("studentName").value.trim();
      let id = document.getElementById("studentID").value.trim();

      if (!name || !id) {
        alert("Please enter both Name and ID");
        return;
      }

      let now = new Date();
      let date = now.toLocaleDateString();
      let time = now.toLocaleTimeString();

      attendanceList.push({ name, id, date, time });
      localStorage.setItem("attendanceList", JSON.stringify(attendanceList));

      loadTable();

      document.getElementById("studentName").value = "";
      document.getElementById("studentID").value = "";
    }

    function exportCSV() {
      if (attendanceList.length === 0) {
        alert("No attendance data to export.");
        return;
      }

      let csvContent = "data:text/csv;charset=utf-8,"
        + "Name,ID,Date,Time\n"
        + attendanceList.map(e => '${e.name},${e.id},${e.date},${e.time}').join("\n");

      let encodedUri = encodeURI(csvContent);
      let link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "attendance.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    loadTable();