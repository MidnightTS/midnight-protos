"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlantFlowerTakeSeedRewardReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerTakeSeedRewardReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlantFlowerTakeSeedRewardReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const pb_1 = require("google-protobuf");
class PlantFlowerTakeSeedRewardReq extends pb_1.Message {
    constructor(data) {
        super();
        _PlantFlowerTakeSeedRewardReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _PlantFlowerTakeSeedRewardReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set schedule_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data) {
        const message = new PlantFlowerTakeSeedRewardReq({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(12, this.schedule_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlantFlowerTakeSeedRewardReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.schedule_id = reader.readUint32();
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
        return PlantFlowerTakeSeedRewardReq.deserialize(bytes);
    }
}
exports.PlantFlowerTakeSeedRewardReq = PlantFlowerTakeSeedRewardReq;
_PlantFlowerTakeSeedRewardReq_one_of_decls = new WeakMap();
