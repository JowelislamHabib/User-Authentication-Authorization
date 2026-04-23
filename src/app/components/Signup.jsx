"use client";

import { ArrowChevronRight, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Input,
  TextField,
  Label,
  Form,
  FieldError,
  Description,
  InputGroup,
} from "@heroui/react";
import React, { useState } from "react";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div>
        <Form className="flex  flex-col gap-4 shadow-2xl bg-white/70 backdrop-blur-xl border border-white rounded-2xl p-10">
          <div className="grid grid-cols-2 gap-4">
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
          </div>
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
          <TextField className="w-full" name="password">
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full "
                type={isVisible ? "text" : "password"}
                placeholder="ch!ngCh0ng"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
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
