"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProjectorOptionReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectorOptionReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ProjectorOptionReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class ProjectorOptionReq extends pb_1.Message {
    constructor(data) {
        super();
        _ProjectorOptionReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _ProjectorOptionReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("op_type" in data && data.op_type != undefined) {
                this.op_type = data.op_type;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
    }
    get op_type() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set op_type(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set entity_id(value) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data) {
        const message = new ProjectorOptionReq({});
        if (data.op_type != null) {
            message.op_type = data.op_type;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.op_type != null) {
            data.op_type = this.op_type;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.op_type != 0)
            writer.writeUint32(7, this.op_type);
        if (this.entity_id != 0)
            writer.writeUint32(10, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProjectorOptionReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.op_type = reader.readUint32();
                    break;
                case 10:
                    message.entity_id = reader.readUint32();
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
        return ProjectorOptionReq.deserialize(bytes);
    }
}
exports.ProjectorOptionReq = ProjectorOptionReq;
_ProjectorOptionReq_one_of_decls = new WeakMap();
(function (ProjectorOptionReq) {
    let ProjectorOpType;
    (function (ProjectorOpType) {
        ProjectorOpType[ProjectorOpType["PROJECTOR_OP_TYPE_NONE"] = 0] = "PROJECTOR_OP_TYPE_NONE";
        ProjectorOpType[ProjectorOpType["PROJECTOR_OP_TYPE_CREATE"] = 1] = "PROJECTOR_OP_TYPE_CREATE";
        ProjectorOpType[ProjectorOpType["PROJECTOR_OP_TYPE_DESTROY"] = 2] = "PROJECTOR_OP_TYPE_DESTROY";
    })(ProjectorOpType = ProjectorOptionReq.ProjectorOpType || (ProjectorOptionReq.ProjectorOpType = {}));
})(ProjectorOptionReq = exports.ProjectorOptionReq || (exports.ProjectorOptionReq = {}));
