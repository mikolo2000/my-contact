import { it, expect, describe } from 'vitest';

describe('group', () => {
  it('should', async() => {
    const response = await fetch("https://dummyjson.com/users?limit=20&select=id,firstName,lastName,gender,email,phone,age");
    const data = await response.json();
    console.log(data.users);
    expect(1).toBeTruthy
  })
})