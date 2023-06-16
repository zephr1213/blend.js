/*
Blend.js is a JavaScript library for Quality of Life.
Developed and maintained by: 0x32
*/
// Function to get the current date in the format "YYYY-MM-DD"
function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to generate a random integer between a minimum and maximum value
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to shuffle an array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to capitalize the first letter of each word in a string
function capitalizeWords(string) {
    return string.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Function to format a number with comma separators
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Function to debounce a function call, ensuring it is executed only after a delay of time
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
}

// Function to throttle a function call, ensuring it is executed at most once every delay milliseconds
function throttle(func, delay) {
    let lastCallTime = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCallTime >= delay) {
            func.apply(null, args);
            lastCallTime = now;
        }
    };
}

// Function to check if a string is a palindrome
function isPalindrome(string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString;
}

// Function to deep clone an object using JSON serialization
function deepClone(object) {
    return JSON.parse(JSON.stringify(object));
}

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}
// Function to check if a string contains only numbers
function isNumeric(string) {
    return /^\d+$/.test(string);
}

// Function to get the current time in the format "HH:MM:SS"
function getCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to convert a string to lowercase with proper Unicode support
function toLowerCase(string) {
    return string.toLocaleLowerCase();
}

// Function to truncate a string to a specified length and append ellipsis if necessary
function truncateString(string, maxLength) {
    if (string.length <= maxLength) {
        return string;
    }
    return string.substring(0, maxLength) + '...';
}

// Function to calculate the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

// Function to check if an array contains duplicate elements
function hasDuplicates(array) {
    return new Set(array).size !== array.length;
}

// Function to remove leading and trailing whitespace from a string
function trimString(string) {
    return string.trim();
}

// Function to format a string as a slug (lowercase with hyphens as word separators)
function slugify(string) {
    return string.toLowerCase().replace(/\s+/g, '-');
}

// Function to calculate the sum of an array of numbers
function calculateSum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Function to generate a random string of specified length
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}
// Function to check if a string is empty or contains only whitespace
function isEmptyString(string) {
    return string.trim() === '';
}

// Function to check if a number is prime
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to get the current timestamp in milliseconds
function getCurrentTimestamp() {
    return Date.now();
}

// Function to check if an object is empty (has no enumerable properties)
function isEmptyObject(object) {
    return Object.keys(object).length === 0;
}

// Function to convert a string to uppercase with proper Unicode support
function toUpperCase(string) {
    return string.toLocaleUpperCase();
}

// Function to calculate the average value of an array of numbers
function calculateAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / array.length;
}

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to remove an element from an array by its value
function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Function to get the file extension from a file path or name
function getFileExtension(filePath) {
    return filePath.slice(filePath.lastIndexOf('.') + 1);
}

// Function to check if a string starts with a specific substring
function startsWith(string, substring) {
    return string.startsWith(substring);
}

// Function to reverse a string
function reverseString(string) {
    return string.split('').reverse().join('');
}

// Function to check if an array is sorted in ascending order
function isSorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            return false;
        }
    }
    return true;
}

// Function to convert an object to an array of key-value pairs
function objectToArray(object) {
    return Object.entries(object);
}

// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
}

// Function to remove duplicate elements from an array
function removeDuplicates(array) {
    return [...new Set(array)];
}

// Function to check if a string ends with a specific substring
function endsWith(string, substring) {
    return string.endsWith(substring);
}

// Function to calculate the exponentiation of a number
function exponentiation(base, exponent) {
    return base ** exponent;
}

// Function to convert a string to title case
function toTitleCase(string) {
    return string.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}

// Function to calculate the product of an array of numbers
function calculateProduct(array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

// Function to check if an array is empty
function isEmptyArray(array) {
    return array.length === 0;
}

// Function to convert a number to a string with leading zeros
function padNumberWithZeros(number, width) {
    return String(number).padStart(width, '0');
}

// Function to find the maximum element in an array
function findMax(array) {
    return Math.max(...array);
}

// Function to check if two arrays are equal (have the same elements in the same order)
function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

// Function to convert a string to camel case
function toCamelCase(string) {
    return string.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}

// Function to get the current month
function getCurrentMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonthIndex = new Date().getMonth();
    return months[currentMonthIndex];
}

// Function to calculate the median value of an array of numbers
function calculateMedian(array) {
    if (array.length === 0) {
        return 0;
    }
    const sortedArray = array.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
        return sortedArray[middleIndex];
    }
}

// Function to check if an array contains a specific element
function arrayContains(array, element) {
    return array.includes(element);
}

// Function to convert a string to kebab case
function toKebabCase(string) {
    return string.replace(/\s+/g, '-').toLowerCase();
}

// Function to check if two objects are deep equal (have the same properties and values)
function objectsAreEqual(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
}

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
// Function to check if a string is a valid email address
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to get the current time in the format "HH:MM"
function getCurrentTimeShort() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to convert a number to a string with trailing zeros
function numberToStringWithTrailingZeros(number, decimals) {
    return number.toFixed(decimals);
}

// Function to check if an array contains a specific value
function arrayIncludes(array, value) {
    return array.includes(value);
}

// Function to get the current timestamp in seconds
function getCurrentTimestampInSeconds() {
    return Math.floor(Date.now() / 1000);
}

// Function to remove an element from an array by its index
function removeElementFromArrayByIndex(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    }
    return array;
}

// Function to get a random item from an array
function getRandomArrayItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Function to format a duration in seconds to a string in the format "HH:MM:SS"
function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to convert a string to snake case
function toSnakeCase(string) {
    return string.replace(/\s+/g, '_').toLowerCase();
}

// Function to check if an array is a subset of another array
function isSubset(array, subset) {
    return subset.every((value) => array.includes(value));
}

// Function to generate a random hexadecimal color code
function generateRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to calculate the distance between two points in a 2D plane
function calculateDistance(x1, y1, x2, y2) {
    const xDiff = x2 - x1;
    const yDiff = y2 - y1;
    return Math.sqrt(xDiff ** 2 + yDiff ** 2);
}

// Function to split a string into an array of words
function splitIntoWords(string) {
    return string.split(/\s+/);
}

// Function to group elements of an array by a specified key
function groupBy(array, key) {
    return array.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) {
            result[groupKey] = [];
        }
        result[groupKey].push(item);
        return result;
    }, {});
}

// Function to get a random integer within a range (inclusive)
function getRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to remove falsy values (false, null, 0, "", undefined, and NaN) from an array
function removeFalsyValues(array) {
    return array.filter(Boolean);
}

// Function to calculate the difference between two dates in days
function calculateDateDifferenceInDays(date1, date2) {
    const timeDifference = Math.abs(date2.getTime() - date1.getTime());
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
// Function to remove duplicate objects from an array based on a property
function removeDuplicateObjects(array, property) {
    return array.filter((obj, index, self) =>
        index === self.findIndex((el) => el[property] === obj[property])
    );
}

// Function to get the current URL
function getCurrentURL() {
    return window.location.href;
}

// Function to generate a random ID
function generateRandomID() {
    return Math.random().toString(36).substring(2);
}

// Function to sort an array of objects by a specified property
function sortByProperty(array, property) {
    return array.sort((a, b) => a[property] - b[property]);
}

// Function to convert a string to PascalCase
function toPascalCase(string) {
    return string.replace(/(\w)(\w*)/g, (_, firstChar, remainingChars) =>
        firstChar.toUpperCase() + remainingChars.toLowerCase()
    );
}

// Function to check if a value is present in an array or object
function isValuePresent(collection, value) {
    if (Array.isArray(collection)) {
        return collection.includes(value);
    } else if (typeof collection === 'object' && collection !== null) {
        return Object.values(collection).includes(value);
    }
    return false;
}

// Function to generate a random integer array within a range (inclusive)
function generateRandomIntegerArrayInRange(min, max, length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}

// Function to count the occurrences of elements in an array
function countOccurrences(array) {
    return array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}


// Function to remove HTML tags from a string
function removeHTMLTags(string) {
    return string.replace(/<[^>]*>/g, '');
}

// Function to convert a string to a slug with a specified separator
function toSlug(string, separator = '-') {
    return string
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, separator)
        .replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');
}

// Function to check if a value is a valid URL
function isValidURL(value) {
    try {
        new URL(value);
        return true;
    } catch (error) {
        return false;
    }
}


// Function to convert an object to a query string
function objectToQueryString(object) {
    const params = new URLSearchParams();
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            params.append(key, object[key]);
        }
    }
    return params.toString();
}

// Function to find the minimum and maximum values in an array
function findMinMax(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return {
        min,
        max
    };
}

// Function to get the current browser name and version
function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;

    if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
        browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
        browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Safari';
        browserVersion = userAgent.match(/Safari\/(\d+\.\d+)/)[1];
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident/') > -1) {
        browserName = 'Internet Explorer';
        browserVersion = userAgent.match(/(?:MSIE |rv:)(\d+(\.\d+)?)/)[1];
    } else {
        browserName = 'Unknown';
        browserVersion = 'N/A';
    }

    return {
        browserName,
        browserVersion
    };
}
// Function to check if a string is a valid palindrome ignoring spaces, punctuation, and capitalization
function isPalindromeIgnoreNonAlphanumeric(string) {
    const formattedString = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    const reversedString = formattedString.split('').reverse().join('');
    return formattedString === reversedString;
}
// Function to convert a number to Roman numerals
function toRomanNumerals(number) {
    const romanNumerals = [{
            value: 1000,
            symbol: 'M'
        },
        {
            value: 900,
            symbol: 'CM'
        },
        {
            value: 500,
            symbol: 'D'
        },
        {
            value: 400,
            symbol: 'CD'
        },
        {
            value: 100,
            symbol: 'C'
        },
        {
            value: 90,
            symbol: 'XC'
        },
        {
            value: 50,
            symbol: 'L'
        },
        {
            value: 40,
            symbol: 'XL'
        },
        {
            value: 10,
            symbol: 'X'
        },
        {
            value: 9,
            symbol: 'IX'
        },
        {
            value: 5,
            symbol: 'V'
        },
        {
            value: 4,
            symbol: 'IV'
        },
        {
            value: 1,
            symbol: 'I'
        }
    ];

    let result = '';
    for (const numeral of romanNumerals) {
        while (number >= numeral.value) {
            result += numeral.symbol;
            number -= numeral.value;
        }
    }
    return result;
}