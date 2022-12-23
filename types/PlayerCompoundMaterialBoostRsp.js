"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCompoundMaterialBoostRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ItemParam_1 = require("./ItemParam");
const CompoundBoostTakeStatusType_1 = require("./CompoundBoostTakeStatusType");
const CompoundQueueData_1 = require("./CompoundQueueData");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCompoundMaterialBoostRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerCompoundMaterialBoostRsp", [
            { no: 10, name: "compound_queue_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CompoundQueueData_1.CompoundQueueData },
            { no: 4, name: "take_status", kind: "enum", T: () => ["CompoundBoostTakeStatusType", CompoundBoostTakeStatusType_1.CompoundBoostTakeStatusType, "COMPOUND_BOOST_TAKE_STATUS_TYPE_"] },
            { no: 3, name: "take_item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ItemParam_1.ItemParam },
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { compoundQueueDataList: [], takeStatus: 0, takeItemList: [], retcode: 0 };
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
                case /* repeated CompoundQueueData compound_queue_data_list */ 10:
                    message.compoundQueueDataList.push(CompoundQueueData_1.CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* CompoundBoostTakeStatusType take_status */ 4:
                    message.takeStatus = reader.int32();
                    break;
                case /* repeated ItemParam take_item_list */ 3:
                    message.takeItemList.push(ItemParam_1.ItemParam.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 13:
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
        /* repeated CompoundQueueData compound_queue_data_list = 10; */
        for (let i = 0; i < message.compoundQueueDataList.length; i++)
            CompoundQueueData_1.CompoundQueueData.internalBinaryWrite(message.compoundQueueDataList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CompoundBoostTakeStatusType take_status = 4; */
        if (message.takeStatus !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.takeStatus);
        /* repeated ItemParam take_item_list = 3; */
        for (let i = 0; i < message.takeItemList.length; i++)
            ItemParam_1.ItemParam.internalBinaryWrite(message.takeItemList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerCompoundMaterialBoostRsp
 */
exports.PlayerCompoundMaterialBoostRsp = new PlayerCompoundMaterialBoostRsp$Type();
