"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryUpgradeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryUpgradeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ReliquaryUpgradeReq", [
            { no: 3, name: "food_reliquary_guid_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 15, name: "item_param_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 8, name: "target_reliquary_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { foodReliquaryGuidList: [], itemParamList: [], targetReliquaryGuid: 0n };
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
                case /* repeated uint64 food_reliquary_guid_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.foodReliquaryGuidList.push(reader.uint64().toBigInt());
                    else
                        message.foodReliquaryGuidList.push(reader.uint64().toBigInt());
                    break;
                case /* repeated ItemParam item_param_list */ 15:
                    message.itemParamList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 target_reliquary_guid */ 8:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
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
        /* repeated uint64 food_reliquary_guid_list = 3; */
        if (message.foodReliquaryGuidList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.foodReliquaryGuidList.length; i++)
                writer.uint64(message.foodReliquaryGuidList[i]);
            writer.join();
        }
        /* repeated ItemParam item_param_list = 15; */
        for (let i = 0; i < message.itemParamList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.itemParamList[i], writer.tag(15, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint64 target_reliquary_guid = 8; */
        if (message.targetReliquaryGuid !== 0n)
            writer.tag(8, runtime_2.WireType.Varint).uint64(message.targetReliquaryGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReliquaryUpgradeReq
 */
exports.ReliquaryUpgradeReq = new ReliquaryUpgradeReq$Type();
