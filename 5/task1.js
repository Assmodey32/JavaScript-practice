// Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список.
// В качестве аргументов функция должна принимать:
//  - массив строк с исходными email адресами
//  - массив строк с email адресами в чёрном списке

function generateEmail() {
  let email = "";
  let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
  let symbolsLength = symbols.length;
  for (let i = 0; i < 10; i++) {
    email += symbols[Math.floor(Math.random() * symbolsLength)];
  }
  email += "@gmail.com";
  return email;
}

function filterEmails(emails, blacklist) {
  let result = [];
  for (let i = 0; i < emails.length; i++) {
    if (blacklist.indexOf(emails[i]) == -1) {
      result.push(emails[i]);
    }
  }
  return result;
}

function task() {
  let emails = [];
  let blacklist = [];
  for (let i = 0; i < 10; i++) {
    emails.push(generateEmail());
  }

  for (let email of emails) {
    if (Math.random() < 0.25) {
      blacklist.push(email);
    }
  }

  let filteredEmails = filterEmails(emails, blacklist);
  console.log(`Emails: ${emails}`);
  console.log(`Filtered emails: ${filteredEmails}`);
  console.log(`Blacklist: ${blacklist}`);

  console.log('\n');

  console.log(`Emails length: ${emails.length}`);
  console.log(`Filtered emails length: ${filteredEmails.length}`);
  console.log(`Blacklist length: ${blacklist.length}`);
}

task();