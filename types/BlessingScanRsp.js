"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessingScanRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BlessingScanRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BlessingScanRsp", [
            { no: 13, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 11, name: "cur_day_scan_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "scan_pic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, curDayScanNum: 0, scanPicId: 0 };
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
                case /* int32 retcode */ 13:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 cur_day_scan_num */ 11:
                    message.curDayScanNum = reader.uint32();
                    break;
                case /* uint32 scan_pic_id */ 12:
                    message.scanPicId = reader.uint32();
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
        /* int32 retcode = 13; */
        if (message.retcode !== 0)
            writer.tag(13, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 cur_day_scan_num = 11; */
        if (message.curDayScanNum !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.curDayScanNum);
        /* uint32 scan_pic_id = 12; */
        if (message.scanPicId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.scanPicId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BlessingScanRsp
 */
exports.BlessingScanRsp = new BlessingScanRsp$Type();
