"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InBattleMechanicusBuildingInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusBuildingInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: InBattleMechanicusBuildingInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class InBattleMechanicusBuildingInfo extends pb_1.Message {
    constructor(data) {
        super();
        _InBattleMechanicusBuildingInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _InBattleMechanicusBuildingInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("building_id" in data && data.building_id != undefined) {
                this.building_id = data.building_id;
            }
            if ("level" in data && data.level != undefined) {
                this.level = data.level;
            }
            if ("cost_points" in data && data.cost_points != undefined) {
                this.cost_points = data.cost_points;
            }
            if ("refund_points" in data && data.refund_points != undefined) {
                this.refund_points = data.refund_points;
            }
        }
    }
    get building_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0);
    }
    set building_id(value) {
        pb_1.Message.setField(this, 8, value);
    }
    get level() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0);
    }
    set level(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get cost_points() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0);
    }
    set cost_points(value) {
        pb_1.Message.setField(this, 2, value);
    }
    get refund_points() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0);
    }
    set refund_points(value) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data) {
        const message = new InBattleMechanicusBuildingInfo({});
        if (data.building_id != null) {
            message.building_id = data.building_id;
        }
        if (data.level != null) {
            message.level = data.level;
        }
        if (data.cost_points != null) {
            message.cost_points = data.cost_points;
        }
        if (data.refund_points != null) {
            message.refund_points = data.refund_points;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.building_id != null) {
            data.building_id = this.building_id;
        }
        if (this.level != null) {
            data.level = this.level;
        }
        if (this.cost_points != null) {
            data.cost_points = this.cost_points;
        }
        if (this.refund_points != null) {
            data.refund_points = this.refund_points;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.building_id != 0)
            writer.writeUint32(8, this.building_id);
        if (this.level != 0)
            writer.writeUint32(7, this.level);
        if (this.cost_points != 0)
            writer.writeUint32(2, this.cost_points);
        if (this.refund_points != 0)
            writer.writeUint32(11, this.refund_points);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new InBattleMechanicusBuildingInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 8:
                    message.building_id = reader.readUint32();
                    break;
                case 7:
                    message.level = reader.readUint32();
                    break;
                case 2:
                    message.cost_points = reader.readUint32();
                    break;
                case 11:
                    message.refund_points = reader.readUint32();
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
        return InBattleMechanicusBuildingInfo.deserialize(bytes);
    }
}
exports.InBattleMechanicusBuildingInfo = InBattleMechanicusBuildingInfo;
_InBattleMechanicusBuildingInfo_one_of_decls = new WeakMap();
