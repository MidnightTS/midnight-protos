"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponUpgradeRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class WeaponUpgradeRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("WeaponUpgradeRsp", [
            { no: 14, name: "old_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_weapon_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "cur_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { oldLevel: 0, targetWeaponGuid: 0n, curLevel: 0, itemParamList: [], retcode: 0 };
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
                case /* uint32 old_level */ 14:
                    message.oldLevel = reader.uint32();
                    break;
                case /* uint64 target_weapon_guid */ 3:
                    message.targetWeaponGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 cur_level */ 6:
                    message.curLevel = reader.uint32();
                    break;
                case /* repeated ItemParam item_param_list */ 8:
                    message.itemParamList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 old_level = 14; */
        if (message.oldLevel !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.oldLevel);
        /* uint64 target_weapon_guid = 3; */
        if (message.targetWeaponGuid !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.targetWeaponGuid);
        /* uint32 cur_level = 6; */
        if (message.curLevel !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.curLevel);
        /* repeated ItemParam item_param_list = 8; */
        for (let i = 0; i < message.itemParamList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WeaponUpgradeRsp
 */
exports.WeaponUpgradeRsp = new WeaponUpgradeRsp$Type();
