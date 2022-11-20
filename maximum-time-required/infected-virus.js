var direction = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];

// Function to find the maximum time
// required for all patients to get infected
function maximumTime(arr) {
  // Stores the number of rows
  var n = arr.length;

  // Stores the number of columns
  var m = arr[0].length;

  // Stores the time of infection
  // of the patient at index (i, j)
  var timeofinfection = Array.from(Array(n), () => Array(m));

  // Stores index and time of
  // infection of infected persons
  var q = [];

  // Traverse the matrix
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      // Set the cell as unvisited
      timeofinfection[i][j] = -1;

      // If the current patient
      // is already infected
      if (arr[i][j] == 2) {
        // Push the index and time of
        // infection of current patient
        q.push([[i, j], 0]);
        timeofinfection[i][j] = 0;
      }
    }
  }

  // Iterate until queue becomes empty
  while (q.length != 0) {
    // Stores the front element of queue
    var current = q[0];

    // Pop out the front element
    q.shift();

    // Check for all four
    // adjacent indices
    for (var it of direction) {
      // Find the index of the
      // adjacent cell
      var i = current[0][0] + it[0];
      var j = current[0][1] + it[1];

      // If the current adjacent
      // cell is invalid or it
      // contains an infected patient
      if (
        i < 0 ||
        j < 0 ||
        i >= n ||
        j >= m ||
        arr[i][j] != 1 ||
        timeofinfection[i][j] != -1
      ) {
        // Continue to the next
        // neighbouring cell
        continue;
      }

      // Push the infected
      // neighbour into queue
      q.push([[i, j], current[1] + 1]);
      timeofinfection[i][j] = current[1] + 1;
    }
  }

  // Stores the maximum time
  var maxi = -1000000000;

  // Stores if any uninfected
  // patient exists or not
  var flag = 0;

  // Traverse the matrix
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      // If no patient is
      // present at index (i, j)
      if (arr[i][j] != 1) continue;

      // If an uninfected patient
      // is present at index (i, j)
      if (arr[i][j] == 1 && timeofinfection[i][j] == -1) {
        // Set flag as true
        flag = 1;
        break;
      }

      // Update the maximum time of infection
      maxi = Math.max(maxi, timeofinfection[i][j]);
    }
  }

  // If an uninfected patient is present
  if (flag) return -1;

  // Return the final result
  return maxi;
}

// Driver Code
var arr = [
  [2, 1, 0, 2, 1],
  [1, 0, 1, 2, 1],
  [1, 0, 0, 2, 1],
];
console.log(maximumTime(arr));
