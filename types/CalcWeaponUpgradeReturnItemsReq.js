"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CalcWeaponUpgradeReturnItemsReq_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcWeaponUpgradeReturnItemsReq = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CalcWeaponUpgradeReturnItemsReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./ItemParam");
const pb_1 = require("google-protobuf");
class CalcWeaponUpgradeReturnItemsReq extends pb_1.Message {
    constructor(data) {
        super();
        _CalcWeaponUpgradeReturnItemsReq_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [15, 3], __classPrivateFieldGet(this, _CalcWeaponUpgradeReturnItemsReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("food_weapon_guid_list" in data && data.food_weapon_guid_list != undefined) {
                this.food_weapon_guid_list = data.food_weapon_guid_list;
            }
            if ("target_weapon_guid" in data && data.target_weapon_guid != undefined) {
                this.target_weapon_guid = data.target_weapon_guid;
            }
            if ("item_param_list" in data && data.item_param_list != undefined) {
                this.item_param_list = data.item_param_list;
            }
        }
    }
    get food_weapon_guid_list() {
        return pb_1.Message.getFieldWithDefault(this, 15, []);
    }
    set food_weapon_guid_list(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get target_weapon_guid() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set target_weapon_guid(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get item_param_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.ItemParam, 3);
    }
    set item_param_list(value) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data) {
        const message = new CalcWeaponUpgradeReturnItemsReq({});
        if (data.food_weapon_guid_list != null) {
            message.food_weapon_guid_list = data.food_weapon_guid_list;
        }
        if (data.target_weapon_guid != null) {
            message.target_weapon_guid = data.target_weapon_guid;
        }
        if (data.item_param_list != null) {
            message.item_param_list = data.item_param_list.map(item => dependency_1.ItemParam.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.food_weapon_guid_list != null) {
            data.food_weapon_guid_list = this.food_weapon_guid_list;
        }
        if (this.target_weapon_guid != null) {
            data.target_weapon_guid = this.target_weapon_guid;
        }
        if (this.item_param_list != null) {
            data.item_param_list = this.item_param_list.map((item) => item.toObject());
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.food_weapon_guid_list.length)
            writer.writePackedUint64(15, this.food_weapon_guid_list);
        if (this.target_weapon_guid != 0)
            writer.writeUint64(12, this.target_weapon_guid);
        if (this.item_param_list.length)
            writer.writeRepeatedMessage(3, this.item_param_list, (item) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CalcWeaponUpgradeReturnItemsReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.food_weapon_guid_list = reader.readPackedUint64();
                    break;
                case 12:
                    message.target_weapon_guid = reader.readUint64();
                    break;
                case 3:
                    reader.readMessage(message.item_param_list, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.ItemParam.deserialize(reader), dependency_1.ItemParam));
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
        return CalcWeaponUpgradeReturnItemsReq.deserialize(bytes);
    }
}
exports.CalcWeaponUpgradeReturnItemsReq = CalcWeaponUpgradeReturnItemsReq;
_CalcWeaponUpgradeReturnItemsReq_one_of_decls = new WeakMap();