const fs = require('fs');

console.log('🧪 Running Tests...\n');


//Test1: check if Readme.md exists
const test1 = () => {
    const readmeExists = fs.existsSync('Readme.md');
    if (readmeExists) {
        console.log('✅ Test 1 Passed: Readme.md file exists.');
        return true;
    } else {
        console.log('❌ Test 1 Failed: Readme.md file does not exist.');
        return false;   
    }
};

const test2 = () => {
  const content = fs.readFileSync('README.md', 'utf-8');
  if (content.length > 10) {
    console.log('✅ Test 2 PASSED: README.md has content');
    return true;
  } else {
    console.log('❌ Test 2 FAILED: README.md is empty');
    return false;
  }
};


// Test 3: Check if package.json exists
const test3 = () => {
  const pkgExists = fs.existsSync('package.json');
  if (pkgExists) {
    console.log('✅ Test 3 PASSED: package.json exists');
    return true;
  } else {
    console.log('❌ Test 3 FAILED: package.json not found');
    return false;
  }
};

// Run all tests
const results = [test1(), test2(), test3()];
const passed = results.filter(r => r).length;
const total = results.length;

console.log(`\n📊 Test Results: ${passed}/${total} passed\n`);

// Exit with error code if any test failed
if (!results.every(r => r)) {
  process.exit(1);
}