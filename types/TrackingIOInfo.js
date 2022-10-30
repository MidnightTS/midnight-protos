"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TrackingIOInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingIOInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: TrackingIOInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class TrackingIOInfo extends pb_1.Message {
    constructor(data) {
        super();
        _TrackingIOInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _TrackingIOInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("rydevicetype" in data && data.rydevicetype != undefined) {
                this.rydevicetype = data.rydevicetype;
            }
            if ("mac" in data && data.mac != undefined) {
                this.mac = data.mac;
            }
            if ("deviceid" in data && data.deviceid != undefined) {
                this.deviceid = data.deviceid;
            }
            if ("client_tz" in data && data.client_tz != undefined) {
                this.client_tz = data.client_tz;
            }
            if ("current_caid" in data && data.current_caid != undefined) {
                this.current_caid = data.current_caid;
            }
            if ("cached_caid" in data && data.cached_caid != undefined) {
                this.cached_caid = data.cached_caid;
            }
            if ("appid" in data && data.appid != undefined) {
                this.appid = data.appid;
            }
        }
    }
    get rydevicetype() {
        return pb_1.Message.getFieldWithDefault(this, 11, "");
    }
    set rydevicetype(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get mac() {
        return pb_1.Message.getFieldWithDefault(this, 6, "");
    }
    set mac(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get deviceid() {
        return pb_1.Message.getFieldWithDefault(this, 9, "");
    }
    set deviceid(value) {
        pb_1.Message.setField(this, 9, value);
    }
    get client_tz() {
        return pb_1.Message.getFieldWithDefault(this, 5, "");
    }
    set client_tz(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get current_caid() {
        return pb_1.Message.getFieldWithDefault(this, 7, "");
    }
    set current_caid(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get cached_caid() {
        return pb_1.Message.getFieldWithDefault(this, 15, "");
    }
    set cached_caid(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get appid() {
        return pb_1.Message.getFieldWithDefault(this, 1, "");
    }
    set appid(value) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data) {
        const message = new TrackingIOInfo({});
        if (data.rydevicetype != null) {
            message.rydevicetype = data.rydevicetype;
        }
        if (data.mac != null) {
            message.mac = data.mac;
        }
        if (data.deviceid != null) {
            message.deviceid = data.deviceid;
        }
        if (data.client_tz != null) {
            message.client_tz = data.client_tz;
        }
        if (data.current_caid != null) {
            message.current_caid = data.current_caid;
        }
        if (data.cached_caid != null) {
            message.cached_caid = data.cached_caid;
        }
        if (data.appid != null) {
            message.appid = data.appid;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.rydevicetype != null) {
            data.rydevicetype = this.rydevicetype;
        }
        if (this.mac != null) {
            data.mac = this.mac;
        }
        if (this.deviceid != null) {
            data.deviceid = this.deviceid;
        }
        if (this.client_tz != null) {
            data.client_tz = this.client_tz;
        }
        if (this.current_caid != null) {
            data.current_caid = this.current_caid;
        }
        if (this.cached_caid != null) {
            data.cached_caid = this.cached_caid;
        }
        if (this.appid != null) {
            data.appid = this.appid;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.rydevicetype.length)
            writer.writeString(11, this.rydevicetype);
        if (this.mac.length)
            writer.writeString(6, this.mac);
        if (this.deviceid.length)
            writer.writeString(9, this.deviceid);
        if (this.client_tz.length)
            writer.writeString(5, this.client_tz);
        if (this.current_caid.length)
            writer.writeString(7, this.current_caid);
        if (this.cached_caid.length)
            writer.writeString(15, this.cached_caid);
        if (this.appid.length)
            writer.writeString(1, this.appid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TrackingIOInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.rydevicetype = reader.readString();
                    break;
                case 6:
                    message.mac = reader.readString();
                    break;
                case 9:
                    message.deviceid = reader.readString();
                    break;
                case 5:
                    message.client_tz = reader.readString();
                    break;
                case 7:
                    message.current_caid = reader.readString();
                    break;
                case 15:
                    message.cached_caid = reader.readString();
                    break;
                case 1:
                    message.appid = reader.readString();
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
        return TrackingIOInfo.deserialize(bytes);
    }
}
exports.TrackingIOInfo = TrackingIOInfo;
_TrackingIOInfo_one_of_decls = new WeakMap();
