"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GetNextResourceInfoRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNextResourceInfoRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GetNextResourceInfoRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ResVersionConfig");
const pb_1 = require("google-protobuf");
class GetNextResourceInfoRsp extends pb_1.Message {
    constructor(data) {
        super();
        _GetNextResourceInfoRsp_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _GetNextResourceInfoRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("next_resource_url" in data && data.next_resource_url != undefined) {
                this.next_resource_url = data.next_resource_url;
            }
            if ("next_res_version_config" in data && data.next_res_version_config != undefined) {
                this.next_res_version_config = data.next_res_version_config;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get next_resource_url() {
        return pb_1.Message.getFieldWithDefault(this, 14, "");
    }
    set next_resource_url(value) {
        pb_1.Message.setField(this, 14, value);
    }
    get next_res_version_config() {
        return pb_1.Message.getWrapperField(this, dependency_1.ResVersionConfig, 2);
    }
    set next_res_version_config(value) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_next_res_version_config() {
        return pb_1.Message.getField(this, 2) != null;
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new GetNextResourceInfoRsp({});
        if (data.next_resource_url != null) {
            message.next_resource_url = data.next_resource_url;
        }
        if (data.next_res_version_config != null) {
            message.next_res_version_config = dependency_1.ResVersionConfig.fromObject(data.next_res_version_config);
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.next_resource_url != null) {
            data.next_resource_url = this.next_resource_url;
        }
        if (this.next_res_version_config != null) {
            data.next_res_version_config = this.next_res_version_config.toObject();
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.next_resource_url.length)
            writer.writeString(14, this.next_resource_url);
        if (this.has_next_res_version_config)
            writer.writeMessage(2, this.next_res_version_config, () => this.next_res_version_config.serialize(writer));
        if (this.retcode != 0)
            writer.writeInt32(12, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetNextResourceInfoRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.next_resource_url = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.next_res_version_config, () => message.next_res_version_config = dependency_1.ResVersionConfig.deserialize(reader));
                    break;
                case 12:
                    message.retcode = reader.readInt32();
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
        return GetNextResourceInfoRsp.deserialize(bytes);
    }
}
exports.GetNextResourceInfoRsp = GetNextResourceInfoRsp;
_GetNextResourceInfoRsp_one_of_decls = new WeakMap();
