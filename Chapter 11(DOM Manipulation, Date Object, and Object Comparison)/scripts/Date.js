// 1. Initialization
const now = new Date();

// 2. Extracting Data (Getters)
const year = now.getFullYear();
const month = now.getMonth(); // Remember: 0-11
const date = now.getDate();
const dayOfWeek = now.getDay(); // 0 (Sun) to 6 (Sat)

console.log(`Today is: ${year}-${month + 1}-${date}`);
console.log(`Day of the week index: ${dayOfWeek}`);

// 3. Modifying Data (Setters)
const futureDate = new Date();
futureDate.setFullYear(2030);
futureDate.setMonth(0); // January
futureDate.setDate(1);  // 1st
console.log("Future Date:", futureDate.toDateString());

// 4. Timestamps (Useful for calculating differences)
const start = Date.now();
// ... some logic ...
const end = Date.now();
console.log(`Elapsed time: ${end - start}ms`);

// 5. Formatting for Users vs APIs
console.log("ISO Format (API):", now.toISOString());
console.log("Local Format (UI):", now.toLocaleDateString('en-US'));

// 6. Quick Math: Adding 7 days to a date
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log("Date in 7 days:", nextWeek.toLocaleDateString());

/**
 * 1. CREATING DATE INSTANCES
 * new Date()                -> Current date/time
 * new Date(1734814206000)   -> From millisecond timestamp
 * new Date("2025-12-21")    -> From date string (ISO format preferred)
 */

/**
 * 2. FREQUENT "GET" METHODS (Extracting data)
 * .getFullYear()  -> 4-digit year (e.g. 2025)
 * .getMonth()     -> Month (0-11) **Note: January is 0**
 * .getDate()      -> Day of the month (1-31)
 * .getDay()       -> Day of the week (0-6) **Note: Sunday is 0**
 * .getHours()     -> Hours (0-23)
 * .getMinutes()   -> Minutes (0-59)
 * .getTime()      -> Total milliseconds since Jan 1, 1970 (Epoch)
 */

/**
 * 3. FORMATTING & CONVERSION
 * .toISOString()         -> Standard format for APIs (e.g. "2025-12-21T12:00:00.000Z")
 * .toLocaleDateString()  -> User-friendly date (e.g. "12/21/2025")
 * .toLocaleTimeString()  -> User-friendly time (e.g. "9:50:00 PM")
 * Date.now()             -> Static method: returns current timestamp without "new Date()"
 */