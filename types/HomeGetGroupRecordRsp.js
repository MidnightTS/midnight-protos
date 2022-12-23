"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeGetGroupRecordRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeGroupRecord_1 = require("./HomeGroupRecord");
// @generated message type with reflection information, may provide speed optimized methods
class HomeGetGroupRecordRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeGetGroupRecordRsp", [
            { no: 6, name: "group_record", kind: "message", T: () => HomeGroupRecord_1.HomeGroupRecord },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "record_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, recordType: 0 };
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
                case /* HomeGroupRecord group_record */ 6:
                    message.groupRecord = HomeGroupRecord_1.HomeGroupRecord.internalBinaryRead(reader, reader.uint32(), options, message.groupRecord);
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 record_type */ 15:
                    message.recordType = reader.uint32();
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
        /* HomeGroupRecord group_record = 6; */
        if (message.groupRecord)
            HomeGroupRecord_1.HomeGroupRecord.internalBinaryWrite(message.groupRecord, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 record_type = 15; */
        if (message.recordType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.recordType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeGetGroupRecordRsp
 */
exports.HomeGetGroupRecordRsp = new HomeGetGroupRecordRsp$Type();
