"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponUpgradeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class WeaponUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("WeaponUpgradeReq", [
            { no: 2, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 14, name: "food_weapon_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { itemParamList: [], foodWeaponGuidList: [], targetWeaponGuid: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated ItemParam item_param_list */ 2:
                    message.itemParamList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint64 food_weapon_guid_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* uint64 target_weapon_guid */ 3:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated ItemParam item_param_list = 2; */
        for (let i = 0; i < message.itemParamList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(2, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint64 food_weapon_guid_list = 14; */
        if (message.foodWeaponGuidList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.foodWeaponGuidList.length; i++)
                writer.uint64(message.foodWeaponGuidList[i]);
            writer.join();
        }
        /* uint64 target_weapon_guid = 3; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(3, runtime_2.WireType.Varint).uint64(message.targetWeaponGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeaponUpgradeReq
 */
exports.WeaponUpgradeReq = new WeaponUpgradeReq$Type();
