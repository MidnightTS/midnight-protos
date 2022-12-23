"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombineRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
// @generated message type with reflection information, may provide speed optimized methods
class CombineRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("CombineRsp", [
            { no: 11, name: "total_return_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 13, name: "total_extra_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 6, name: "total_random_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 7, name: "avatar_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "combine_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "combine_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "cost_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "result_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam }
        ]);
    }
    create(value) {
        const message = { totalReturnItemList: [], totalExtraItemList: [], totalRandomItemList: [], avatarGuid: 0n, combineCount: 0, combineId: 0, costItemList: [], retcode: 0, resultItemList: [] };
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
                case /* repeated ItemParam total_return_item_list */ 11:
                    message.totalReturnItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam total_extra_item_list */ 13:
                    message.totalExtraItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ItemParam total_random_item_list */ 6:
                    message.totalRandomItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 avatar_guid */ 7:
                    message.avatarGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 combine_count */ 2:
                    message.combineCount = reader.uint32();
                    break;
                case /* uint32 combine_id */ 10:
                    message.combineId = reader.uint32();
                    break;
                case /* repeated ItemParam cost_item_list */ 15:
                    message.costItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
                    break;
                case /* repeated ItemParam result_item_list */ 4:
                    message.resultItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated ItemParam total_return_item_list = 11; */
        for (let i = 0; i < message.totalReturnItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.totalReturnItemList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam total_extra_item_list = 13; */
        for (let i = 0; i < message.totalExtraItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.totalExtraItemList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated ItemParam total_random_item_list = 6; */
        for (let i = 0; i < message.totalRandomItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.totalRandomItemList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 avatar_guid = 7; */
        if (message.avatarGuid !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.avatarGuid);
        /* uint32 combine_count = 2; */
        if (message.combineCount !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.combineCount);
        /* uint32 combine_id = 10; */
        if (message.combineId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.combineId);
        /* repeated ItemParam cost_item_list = 15; */
        for (let i = 0; i < message.costItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.costItemList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated ItemParam result_item_list = 4; */
        for (let i = 0; i < message.resultItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.resultItemList[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CombineRsp
 */
exports.CombineRsp = new CombineRsp$Type();
