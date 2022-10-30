"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FurnitureMakeBeHelpedData_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureMakeBeHelpedData = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FurnitureMakeBeHelpedData.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ProfilePicture");
const pb_1 = require("google-protobuf");
class FurnitureMakeBeHelpedData extends pb_1.Message {
    constructor(data) {
        super();
        _FurnitureMakeBeHelpedData_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _FurnitureMakeBeHelpedData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("time" in data && data.time != undefined) {
                this.time = data.time;
            }
            if ("icon" in data && data.icon != undefined) {
                this.icon = data.icon;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
            if ("player_name" in data && data.player_name != undefined) {
                this.player_name = data.player_name;
            }
            if ("profile_picture" in data && data.profile_picture != undefined) {
                this.profile_picture = data.profile_picture;
            }
        }
    }
    get time() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set time(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get icon() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set icon(value) {
        pb_1.Message.setField(this, 11, value);
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set uid(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get player_name() {
        return pb_1.Message.getFieldWithDefault(this, 10, "");
    }
    set player_name(value) {
        pb_1.Message.setField(this, 10, value);
    }
    get profile_picture() {
        return pb_1.Message.getWrapperField(this, dependency_1.ProfilePicture, 1);
    }
    set profile_picture(value) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_profile_picture() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data) {
        const message = new FurnitureMakeBeHelpedData({});
        if (data.time != null) {
            message.time = data.time;
        }
        if (data.icon != null) {
            message.icon = data.icon;
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        if (data.player_name != null) {
            message.player_name = data.player_name;
        }
        if (data.profile_picture != null) {
            message.profile_picture = dependency_1.ProfilePicture.fromObject(data.profile_picture);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.time != null) {
            data.time = this.time;
        }
        if (this.icon != null) {
            data.icon = this.icon;
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        if (this.player_name != null) {
            data.player_name = this.player_name;
        }
        if (this.profile_picture != null) {
            data.profile_picture = this.profile_picture.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.time != 0)
            writer.writeFixed32(12, this.time);
        if (this.icon != 0)
            writer.writeUint32(11, this.icon);
        if (this.uid != 0)
            writer.writeUint32(7, this.uid);
        if (this.player_name.length)
            writer.writeString(10, this.player_name);
        if (this.has_profile_picture)
            writer.writeMessage(1, this.profile_picture, () => this.profile_picture.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FurnitureMakeBeHelpedData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.time = reader.readFixed32();
                    break;
                case 11:
                    message.icon = reader.readUint32();
                    break;
                case 7:
                    message.uid = reader.readUint32();
                    break;
                case 10:
                    message.player_name = reader.readString();
                    break;
                case 1:
                    reader.readMessage(message.profile_picture, () => message.profile_picture = dependency_1.ProfilePicture.deserialize(reader));
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
        return FurnitureMakeBeHelpedData.deserialize(bytes);
    }
}
exports.FurnitureMakeBeHelpedData = FurnitureMakeBeHelpedData;
_FurnitureMakeBeHelpedData_one_of_decls = new WeakMap();
