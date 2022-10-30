"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuickUseWidgetReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickUseWidgetReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuickUseWidgetReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./WidgetCameraInfo");
const dependency_2 = require("./WidgetCreateLocationInfo");
const dependency_3 = require("./WidgetCreatorInfo");
const dependency_4 = require("./WidgetThunderBirdFeatherInfo");
const pb_1 = require("google-protobuf");
class QuickUseWidgetReq extends pb_1.Message {
    constructor(data) {
        super();
        _QuickUseWidgetReq_one_of_decls.set(this, [[676, 478, 812, 1859]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuickUseWidgetReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("location_info" in data && data.location_info != undefined) {
                this.location_info = data.location_info;
            }
            if ("camera_info" in data && data.camera_info != undefined) {
                this.camera_info = data.camera_info;
            }
            if ("creator_info" in data && data.creator_info != undefined) {
                this.creator_info = data.creator_info;
            }
            if ("thunder_bird_feather_info" in data && data.thunder_bird_feather_info != undefined) {
                this.thunder_bird_feather_info = data.thunder_bird_feather_info;
            }
        }
    }
    get location_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.WidgetCreateLocationInfo, 676);
    }
    set location_info(value) {
        pb_1.Message.setOneofWrapperField(this, 676, __classPrivateFieldGet(this, _QuickUseWidgetReq_one_of_decls, "f")[0], value);
    }
    get has_location_info() {
        return pb_1.Message.getField(this, 676) != null;
    }
    get camera_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.WidgetCameraInfo, 478);
    }
    set camera_info(value) {
        pb_1.Message.setOneofWrapperField(this, 478, __classPrivateFieldGet(this, _QuickUseWidgetReq_one_of_decls, "f")[0], value);
    }
    get has_camera_info() {
        return pb_1.Message.getField(this, 478) != null;
    }
    get creator_info() {
        return pb_1.Message.getWrapperField(this, dependency_3.WidgetCreatorInfo, 812);
    }
    set creator_info(value) {
        pb_1.Message.setOneofWrapperField(this, 812, __classPrivateFieldGet(this, _QuickUseWidgetReq_one_of_decls, "f")[0], value);
    }
    get has_creator_info() {
        return pb_1.Message.getField(this, 812) != null;
    }
    get thunder_bird_feather_info() {
        return pb_1.Message.getWrapperField(this, dependency_4.WidgetThunderBirdFeatherInfo, 1859);
    }
    set thunder_bird_feather_info(value) {
        pb_1.Message.setOneofWrapperField(this, 1859, __classPrivateFieldGet(this, _QuickUseWidgetReq_one_of_decls, "f")[0], value);
    }
    get has_thunder_bird_feather_info() {
        return pb_1.Message.getField(this, 1859) != null;
    }
    get param() {
        const cases = {
            0: "none",
            676: "location_info",
            478: "camera_info",
            812: "creator_info",
            1859: "thunder_bird_feather_info"
        };
        return cases[pb_1.Message.computeOneofCase(this, [676, 478, 812, 1859])];
    }
    static fromObject(data) {
        const message = new QuickUseWidgetReq({});
        if (data.location_info != null) {
            message.location_info = dependency_2.WidgetCreateLocationInfo.fromObject(data.location_info);
        }
        if (data.camera_info != null) {
            message.camera_info = dependency_1.WidgetCameraInfo.fromObject(data.camera_info);
        }
        if (data.creator_info != null) {
            message.creator_info = dependency_3.WidgetCreatorInfo.fromObject(data.creator_info);
        }
        if (data.thunder_bird_feather_info != null) {
            message.thunder_bird_feather_info = dependency_4.WidgetThunderBirdFeatherInfo.fromObject(data.thunder_bird_feather_info);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.location_info != null) {
            data.location_info = this.location_info.toObject();
        }
        if (this.camera_info != null) {
            data.camera_info = this.camera_info.toObject();
        }
        if (this.creator_info != null) {
            data.creator_info = this.creator_info.toObject();
        }
        if (this.thunder_bird_feather_info != null) {
            data.thunder_bird_feather_info = this.thunder_bird_feather_info.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_location_info)
            writer.writeMessage(676, this.location_info, () => this.location_info.serialize(writer));
        if (this.has_camera_info)
            writer.writeMessage(478, this.camera_info, () => this.camera_info.serialize(writer));
        if (this.has_creator_info)
            writer.writeMessage(812, this.creator_info, () => this.creator_info.serialize(writer));
        if (this.has_thunder_bird_feather_info)
            writer.writeMessage(1859, this.thunder_bird_feather_info, () => this.thunder_bird_feather_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuickUseWidgetReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 676:
                    reader.readMessage(message.location_info, () => message.location_info = dependency_2.WidgetCreateLocationInfo.deserialize(reader));
                    break;
                case 478:
                    reader.readMessage(message.camera_info, () => message.camera_info = dependency_1.WidgetCameraInfo.deserialize(reader));
                    break;
                case 812:
                    reader.readMessage(message.creator_info, () => message.creator_info = dependency_3.WidgetCreatorInfo.deserialize(reader));
                    break;
                case 1859:
                    reader.readMessage(message.thunder_bird_feather_info, () => message.thunder_bird_feather_info = dependency_4.WidgetThunderBirdFeatherInfo.deserialize(reader));
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
        return QuickUseWidgetReq.deserialize(bytes);
    }
}
exports.QuickUseWidgetReq = QuickUseWidgetReq;
_QuickUseWidgetReq_one_of_decls = new WeakMap();
