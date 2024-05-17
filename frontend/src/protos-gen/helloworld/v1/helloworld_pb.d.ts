// @generated by protoc-gen-es v1.9.0 with parameter "target=js+dts"
// @generated from file helloworld/v1/helloworld.proto (package helloworld.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message helloworld.v1.HelloWorldRequest
 */
export declare class HelloWorldRequest extends Message<HelloWorldRequest> {
  constructor(data?: PartialMessage<HelloWorldRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "helloworld.v1.HelloWorldRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HelloWorldRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HelloWorldRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HelloWorldRequest;

  static equals(a: HelloWorldRequest | PlainMessage<HelloWorldRequest> | undefined, b: HelloWorldRequest | PlainMessage<HelloWorldRequest> | undefined): boolean;
}

/**
 * @generated from message helloworld.v1.HelloWorldResponse
 */
export declare class HelloWorldResponse extends Message<HelloWorldResponse> {
  /**
   * @generated from field: string message = 1;
   */
  message: string;

  constructor(data?: PartialMessage<HelloWorldResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "helloworld.v1.HelloWorldResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HelloWorldResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HelloWorldResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HelloWorldResponse;

  static equals(a: HelloWorldResponse | PlainMessage<HelloWorldResponse> | undefined, b: HelloWorldResponse | PlainMessage<HelloWorldResponse> | undefined): boolean;
}

