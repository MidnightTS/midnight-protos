"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GivingRecordChangeNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GivingRecord_1 = require("./GivingRecord");
// @generated message type with reflection information, may provide speed optimized methods
class GivingRecordChangeNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GivingRecordChangeNotify", [
            { no: 14, name: "is_deactive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 15, name: "giving_record", kind: "message", T: () => GivingRecord_1.GivingRecord }
        ]);
    }
    create(value) {
        const message = { isDeactive: false };
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
                case /* bool is_deactive */ 14:
                    message.isDeactive = reader.bool();
                    break;
                case /* GivingRecord giving_record */ 15:
                    message.givingRecord = GivingRecord_1.GivingRecord.internalBinaryRead(reader, reader.uint32(), options, message.givingRecord);
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
        /* bool is_deactive = 14; */
        if (message.isDeactive !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isDeactive);
        /* GivingRecord giving_record = 15; */
        if (message.givingRecord)
            GivingRecord_1.GivingRecord.internalBinaryWrite(message.givingRecord, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GivingRecordChangeNotify
 */
exports.GivingRecordChangeNotify = new GivingRecordChangeNotify$Type();
