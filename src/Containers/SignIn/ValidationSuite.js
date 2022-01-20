import vest, { test, enforce } from "vest";

export const validateEmail = vest.create((data = {}) => {
  test("email", "Email is required", () => {
    enforce(data.email).isNotEmpty();
  });
  test("email", "Invalid Email", () => {
    enforce(data.email).matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });
});

export const validatePassword = vest.create((data = {}) => {
  test("password", "Password is required", () => {
    enforce(data.password).isNotEmpty();
  });
  test("password", "Password must be at least 10 chars", () => {
    enforce(data.password).longerThanOrEquals(10);
  });

  test("password", "Password must contain a lowercase letter", () => {
    enforce(data.password).matches(/[a-z]/);
  });

  test("password", "Password must contain a digit", () => {
    enforce(data.password).matches(/[0-9]/);
  });

  test("password", "Password must contain a uppercase letter", () => {
    enforce(data.password).matches(/[A-Z]/);
  });

  // test('password', 'Password must contain a symbol', () => {
  //   enforce(data.password).matches(/[^A-Za-z0-9]/);
  // });
});

export const validatePasswordAndConfirmPassword = vest.create((data = {}) => {
  test("password", "Password is required", () => {
    enforce(data.password).isNotEmpty();
  });

  test("password", "Password must contain a lowercase letter", () => {
    enforce(data.password).matches(/[a-z]/);
  });

  test("password", "Password must contain a digit", () => {
    enforce(data.password).matches(/[0-9]/);
  });

  test("password", "Password must contain a uppercase letter", () => {
    enforce(data.password).matches(/[A-Z]/);
  });

  test("password", "Password must be at least 10 chars", () => {
    enforce(data.password).longerThanOrEquals(10);
  });

  test("confirmPassword", "Confirm password is required", () => {
    enforce(data.confirmPassword).isNotEmpty();
  });

  if (data.password) {
    test("confirmPassword", "Passwords do not match", () => {
      enforce(data.confirmPassword).equals(data.password);
    });
  }
});

export const validatePasswordAndConfirmPasswordAndOldpassword = vest.create(
  (data = {}) => {
    test("password", "New Password is required", () => {
      enforce(data.password).isNotEmpty();
    });
    test("oldpassword", "Old Password is required", () => {
      enforce(data.oldpassword).isNotEmpty();
    });
    test("password", "Password must contain a lowercase letter", () => {
      enforce(data.password).matches(/[a-z]/);
    });

    test("password", "Password must contain a digit", () => {
      enforce(data.password).matches(/[0-9]/);
    });

    test("password", "Password must contain a uppercase letter", () => {
      enforce(data.password).matches(/[A-Z]/);
    });

    test("password", "Password must be at least 10 chars", () => {
      enforce(data.password).longerThanOrEquals(10);
    });

    test("confirmPassword", "Confirm password is required", () => {
      enforce(data.confirmPassword).isNotEmpty();
    });

    if (data.password) {
      test("confirmPassword", "Passwords do not match", () => {
        enforce(data.confirmPassword).equals(data.password);
      });
    }
  }
);
export const validateLoginPassword = vest.create((data = {}) => {
  test("password", "Password is required", () => {
    enforce(data.password).isNotEmpty();
  });
});
