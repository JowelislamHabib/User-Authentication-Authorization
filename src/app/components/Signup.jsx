"use client";

import { ArrowChevronRight } from "@gravity-ui/icons";
import {
  Button,
  Input,
  TextField,
  Label,
  Form,
  FieldError,
  Description,
} from "@heroui/react";
import React from "react";

const Signup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <div>
        <Form className="flex  flex-col gap-4 shadow-2xl bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-10">
          <TextField
            isRequired
            name="firstName"
            type="text"
            validate={(value) => {
              if (value.length < 2) {
                return "First Name must be at least 2 characters";
              }
              return null;
            }}
          >
            <Label>First Name</Label>
            <Input placeholder="Mr." />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="lastName"
            type="text"
            validate={(value) => {
              if (value.length < 3) {
                return "Last Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Last Name</Label>
            <Input placeholder="John" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit">
              <ArrowChevronRight />
              Register
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
