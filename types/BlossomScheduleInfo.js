"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BlossomScheduleInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlossomScheduleInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlossomScheduleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class BlossomScheduleInfo extends pb_1.Message {
    constructor(data) {
        super();
        _BlossomScheduleInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _BlossomScheduleInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("state" in data && data.state != undefined) {
                this.state = data.state;
            }
            if ("round" in data && data.round != undefined) {
                this.round = data.round;
            }
            if ("circle_camp_id" in data && data.circle_camp_id != undefined) {
                this.circle_camp_id = data.circle_camp_id;
            }
            if ("refresh_id" in data && data.refresh_id != undefined) {
                this.refresh_id = data.refresh_id;
            }
            if ("finish_progress" in data && data.finish_progress != undefined) {
                this.finish_progress = data.finish_progress;
            }
        }
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0);
    }
    set progress(value) {
        pb_1.Message.setField(this, 13, value);
    }
    get state() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0);
    }
    set state(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get round() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set round(value) {
        pb_1.Message.setField(this, 4, value);
    }
    get circle_camp_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set circle_camp_id(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get refresh_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set refresh_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get finish_progress() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0);
    }
    set finish_progress(value) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data) {
        const message = new BlossomScheduleInfo({});
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.state != null) {
            message.state = data.state;
        }
        if (data.round != null) {
            message.round = data.round;
        }
        if (data.circle_camp_id != null) {
            message.circle_camp_id = data.circle_camp_id;
        }
        if (data.refresh_id != null) {
            message.refresh_id = data.refresh_id;
        }
        if (data.finish_progress != null) {
            message.finish_progress = data.finish_progress;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.state != null) {
            data.state = this.state;
        }
        if (this.round != null) {
            data.round = this.round;
        }
        if (this.circle_camp_id != null) {
            data.circle_camp_id = this.circle_camp_id;
        }
        if (this.refresh_id != null) {
            data.refresh_id = this.refresh_id;
        }
        if (this.finish_progress != null) {
            data.finish_progress = this.finish_progress;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.progress != 0)
            writer.writeUint32(13, this.progress);
        if (this.state != 0)
            writer.writeUint32(10, this.state);
        if (this.round != 0)
            writer.writeUint32(4, this.round);
        if (this.circle_camp_id != 0)
            writer.writeUint32(15, this.circle_camp_id);
        if (this.refresh_id != 0)
            writer.writeUint32(6, this.refresh_id);
        if (this.finish_progress != 0)
            writer.writeUint32(14, this.finish_progress);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlossomScheduleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.progress = reader.readUint32();
                    break;
                case 10:
                    message.state = reader.readUint32();
                    break;
                case 4:
                    message.round = reader.readUint32();
                    break;
                case 15:
                    message.circle_camp_id = reader.readUint32();
                    break;
                case 6:
                    message.refresh_id = reader.readUint32();
                    break;
                case 14:
                    message.finish_progress = reader.readUint32();
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
        return BlossomScheduleInfo.deserialize(bytes);
    }
}
exports.BlossomScheduleInfo = BlossomScheduleInfo;
_BlossomScheduleInfo_one_of_decls = new WeakMap();
