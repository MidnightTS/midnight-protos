"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _WorldRoutineChangeNotify_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldRoutineChangeNotify = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: WorldRoutineChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./WorldRoutineInfo");
const pb_1 = require("google-protobuf");
class WorldRoutineChangeNotify extends pb_1.Message {
    constructor(data) {
        super();
        _WorldRoutineChangeNotify_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _WorldRoutineChangeNotify_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("routine_info" in data && data.routine_info != undefined) {
                this.routine_info = data.routine_info;
            }
            if ("routine_type" in data && data.routine_type != undefined) {
                this.routine_type = data.routine_type;
            }
        }
    }
    get routine_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.WorldRoutineInfo, 3);
    }
    set routine_info(value) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_routine_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get routine_type() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set routine_type(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new WorldRoutineChangeNotify({});
        if (data.routine_info != null) {
            message.routine_info = dependency_1.WorldRoutineInfo.fromObject(data.routine_info);
        }
        if (data.routine_type != null) {
            message.routine_type = data.routine_type;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.routine_info != null) {
            data.routine_info = this.routine_info.toObject();
        }
        if (this.routine_type != null) {
            data.routine_type = this.routine_type;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_routine_info)
            writer.writeMessage(3, this.routine_info, () => this.routine_info.serialize(writer));
        if (this.routine_type != 0)
            writer.writeUint32(11, this.routine_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new WorldRoutineChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.routine_info, () => message.routine_info = dependency_1.WorldRoutineInfo.deserialize(reader));
                    break;
                case 11:
                    message.routine_type = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return WorldRoutineChangeNotify.deserialize(bytes);
    }
}
exports.WorldRoutineChangeNotify = WorldRoutineChangeNotify;
_WorldRoutineChangeNotify_one_of_decls = new WeakMap();
