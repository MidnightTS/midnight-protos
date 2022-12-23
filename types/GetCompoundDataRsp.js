"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCompoundDataRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CompoundQueueData_1 = require("./CompoundQueueData");
// @generated message type with reflection information, may provide speed optimized methods
class GetCompoundDataRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetCompoundDataRsp", [
            { no: 4, name: "compound_queue_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CompoundQueueData_1.CompoundQueueData },
            { no: 10, name: "unlock_compound_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { compoundQueueDataList: [], unlockCompoundList: [], retcode: 0 };
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
                case /* repeated CompoundQueueData compound_queue_data_list */ 4:
                    message.compoundQueueDataList.push(CompoundQueueData_1.CompoundQueueData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated uint32 unlock_compound_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unlockCompoundList.push(reader.uint32());
                    else
                        message.unlockCompoundList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 15:
                    message.retcode = reader.int32();
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
        /* repeated CompoundQueueData compound_queue_data_list = 4; */
        for (let i = 0; i < message.compoundQueueDataList.length; i++)
            CompoundQueueData_1.CompoundQueueData.internalBinaryWrite(message.compoundQueueDataList[i], writer.tag(4, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* repeated uint32 unlock_compound_list = 10; */
        if (message.unlockCompoundList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unlockCompoundList.length; i++)
                writer.uint32(message.unlockCompoundList[i]);
            writer.join();
        }
        /* int32 retcode = 15; */
        if (message.retcode !== 0)
            writer.tag(15, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetCompoundDataRsp
 */
exports.GetCompoundDataRsp = new GetCompoundDataRsp$Type();
