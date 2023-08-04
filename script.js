$(document).ready(() => {
    // Function to load all users and display them in the table
    function loadUsers() {
      $.get('/api/users', (users) => {
        const $tableBody = $('#usersTable tbody');
        $tableBody.empty();
  
        users.forEach(user => {
          $tableBody.append(`
            <tr>
              <td>${user.id}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.age}</td>
              <td>
                <button class="btn-update" data-id="${user.id}">Update</button>
                <button class="btn-delete" data-id="${user.id}">Delete</button>
              </td>
            </tr>
          `);
        });
      });
    }
  
    // Load all users on page load
    loadUsers();
  
    // Handle form submission to create a new user
    $('#createUserForm').submit((event) => {
      event.preventDefault();
      const formData = {
        username: $('#username').val(),
        email: $('#email').val(),
        age: parseInt($('#age').val()),
      };
  
      $.post('/api/users', formData, (data) => {
        console.log('New user created:', data);
        loadUsers(); // Refresh the table after creating a new user
      });
    });
  
    // Handle click events on Update and Delete buttons
    $('#usersTable').on('click', '.btn-update', function () {
      const userId = $(this).data('id');
      // Replace the following line with the code to update the user by ID
      console.log('Update user with ID:', userId);
    });
  
    $('#usersTable').on('click', '.btn-delete', function () {
      const userId = $(this).data('id');
      // Replace the following line with the code to delete the user by ID
      console.log('Delete user with ID:', userId);
    });
  });
  