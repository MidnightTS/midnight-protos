"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiracleRingDeliverItemReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const InterOpType_1 = require("./InterOpType");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class MiracleRingDeliverItemReq$Type extends runtime_5.MessageType {
    constructor() {
        super("MiracleRingDeliverItemReq", [
            { no: 3, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 6, name: "gadget_entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "gadget_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "food_weapon_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "op_type", kind: "enum", T: () => ["InterOpType", InterOpType_1.InterOpType, "INTER_OP_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { itemParamList: [], gadgetEntityId: 0, gadgetId: 0, foodWeaponGuidList: [], opType: 0 };
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
                case /* repeated ItemParam item_param_list */ 3:
                    message.itemParamList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 gadget_entity_id */ 6:
                    message.gadgetEntityId = reader.uint32();
                    break;
                case /* uint32 gadget_id */ 8:
                    message.gadgetId = reader.uint32();
                    break;
                case /* repeated uint64 food_weapon_guid_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodWeaponGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* InterOpType op_type */ 15:
                    message.opType = reader.int32();
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
        /* repeated ItemParam item_param_list = 3; */
        for (let i = 0; i < message.itemParamList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(3, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 gadget_entity_id = 6; */
        if (message.gadgetEntityId !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.gadgetEntityId);
        /* uint32 gadget_id = 8; */
        if (message.gadgetId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.gadgetId);
        /* repeated uint64 food_weapon_guid_list = 13; */
        if (message.foodWeaponGuidList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.foodWeaponGuidList.length; i++)
                writer.uint64(message.foodWeaponGuidList[i]);
            writer.join();
        }
        /* InterOpType op_type = 15; */
        if (message.opType !== 0)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.opType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MiracleRingDeliverItemReq
 */
exports.MiracleRingDeliverItemReq = new MiracleRingDeliverItemReq$Type();
