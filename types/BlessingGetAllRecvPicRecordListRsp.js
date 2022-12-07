"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingGetAllRecvPicRecordListRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BlessingRecvPicRecord_1 = require("./BlessingRecvPicRecord");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingGetAllRecvPicRecordListRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingGetAllRecvPicRecordListRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "recv_pic_record_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BlessingRecvPicRecord_1.BlessingRecvPicRecord }
        ]);
    }
    create(value) {
        const message = { retcode: 0, recvPicRecordList: [] };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* repeated BlessingRecvPicRecord recv_pic_record_list */ 6:
                    message.recvPicRecordList.push(BlessingRecvPicRecord_1.BlessingRecvPicRecord.internalBinaryRead(reader, reader.uint32(), options));
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* repeated BlessingRecvPicRecord recv_pic_record_list = 6; */
        for (let i = 0; i < message.recvPicRecordList.length; i++)
            BlessingRecvPicRecord_1.BlessingRecvPicRecord.internalBinaryWrite(message.recvPicRecordList[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingGetAllRecvPicRecordListRsp
 */
exports.BlessingGetAllRecvPicRecordListRsp = new BlessingGetAllRecvPicRecordListRsp$Type();
