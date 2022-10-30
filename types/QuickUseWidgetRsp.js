"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _QuickUseWidgetRsp_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickUseWidgetRsp = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: QuickUseWidgetRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ClientCollectorData");
const dependency_2 = require("./OneofGatherPointDetectorData");
const dependency_3 = require("./SkyCrystalDetectorQuickUseResult");
const pb_1 = require("google-protobuf");
class QuickUseWidgetRsp extends pb_1.Message {
    constructor(data) {
        super();
        _QuickUseWidgetRsp_one_of_decls.set(this, [[3, 15, 168922]]);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _QuickUseWidgetRsp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("material_id" in data && data.material_id != undefined) {
                this.material_id = data.material_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("detector_data" in data && data.detector_data != undefined) {
                this.detector_data = data.detector_data;
            }
            if ("client_collector_data" in data && data.client_collector_data != undefined) {
                this.client_collector_data = data.client_collector_data;
            }
            if ("sky_crystal_detector_quick_use_result" in data && data.sky_crystal_detector_quick_use_result != undefined) {
                this.sky_crystal_detector_quick_use_result = data.sky_crystal_detector_quick_use_result;
            }
        }
    }
    get material_id() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set material_id(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0);
    }
    set retcode(value) {
        pb_1.Message.setField(this, 5, value);
    }
    get detector_data() {
        return pb_1.Message.getWrapperField(this, dependency_2.OneofGatherPointDetectorData, 3);
    }
    set detector_data(value) {
        pb_1.Message.setOneofWrapperField(this, 3, __classPrivateFieldGet(this, _QuickUseWidgetRsp_one_of_decls, "f")[0], value);
    }
    get has_detector_data() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get client_collector_data() {
        return pb_1.Message.getWrapperField(this, dependency_1.ClientCollectorData, 15);
    }
    set client_collector_data(value) {
        pb_1.Message.setOneofWrapperField(this, 15, __classPrivateFieldGet(this, _QuickUseWidgetRsp_one_of_decls, "f")[0], value);
    }
    get has_client_collector_data() {
        return pb_1.Message.getField(this, 15) != null;
    }
    get sky_crystal_detector_quick_use_result() {
        return pb_1.Message.getWrapperField(this, dependency_3.SkyCrystalDetectorQuickUseResult, 168922);
    }
    set sky_crystal_detector_quick_use_result(value) {
        pb_1.Message.setOneofWrapperField(this, 168922, __classPrivateFieldGet(this, _QuickUseWidgetRsp_one_of_decls, "f")[0], value);
    }
    get has_sky_crystal_detector_quick_use_result() {
        return pb_1.Message.getField(this, 168922) != null;
    }
    get param() {
        const cases = {
            0: "none",
            3: "detector_data",
            15: "client_collector_data",
            168922: "sky_crystal_detector_quick_use_result"
        };
        return cases[pb_1.Message.computeOneofCase(this, [3, 15, 168922])];
    }
    static fromObject(data) {
        const message = new QuickUseWidgetRsp({});
        if (data.material_id != null) {
            message.material_id = data.material_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.detector_data != null) {
            message.detector_data = dependency_2.OneofGatherPointDetectorData.fromObject(data.detector_data);
        }
        if (data.client_collector_data != null) {
            message.client_collector_data = dependency_1.ClientCollectorData.fromObject(data.client_collector_data);
        }
        if (data.sky_crystal_detector_quick_use_result != null) {
            message.sky_crystal_detector_quick_use_result = dependency_3.SkyCrystalDetectorQuickUseResult.fromObject(data.sky_crystal_detector_quick_use_result);
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.material_id != null) {
            data.material_id = this.material_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.detector_data != null) {
            data.detector_data = this.detector_data.toObject();
        }
        if (this.client_collector_data != null) {
            data.client_collector_data = this.client_collector_data.toObject();
        }
        if (this.sky_crystal_detector_quick_use_result != null) {
            data.sky_crystal_detector_quick_use_result = this.sky_crystal_detector_quick_use_result.toObject();
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.material_id != 0)
            writer.writeUint32(6, this.material_id);
        if (this.retcode != 0)
            writer.writeInt32(5, this.retcode);
        if (this.has_detector_data)
            writer.writeMessage(3, this.detector_data, () => this.detector_data.serialize(writer));
        if (this.has_client_collector_data)
            writer.writeMessage(15, this.client_collector_data, () => this.client_collector_data.serialize(writer));
        if (this.has_sky_crystal_detector_quick_use_result)
            writer.writeMessage(168922, this.sky_crystal_detector_quick_use_result, () => this.sky_crystal_detector_quick_use_result.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuickUseWidgetRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.material_id = reader.readUint32();
                    break;
                case 5:
                    message.retcode = reader.readInt32();
                    break;
                case 3:
                    reader.readMessage(message.detector_data, () => message.detector_data = dependency_2.OneofGatherPointDetectorData.deserialize(reader));
                    break;
                case 15:
                    reader.readMessage(message.client_collector_data, () => message.client_collector_data = dependency_1.ClientCollectorData.deserialize(reader));
                    break;
                case 168922:
                    reader.readMessage(message.sky_crystal_detector_quick_use_result, () => message.sky_crystal_detector_quick_use_result = dependency_3.SkyCrystalDetectorQuickUseResult.deserialize(reader));
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
        return QuickUseWidgetRsp.deserialize(bytes);
    }
}
exports.QuickUseWidgetRsp = QuickUseWidgetRsp;
_QuickUseWidgetRsp_one_of_decls = new WeakMap();
