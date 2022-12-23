"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityReputationQuestInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class CityReputationQuestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CityReputationQuestInfo", [
            { no: 12, name: "Unk3300_IMLDPDMHJBJ", kind: "scalar", jsonName: "Unk3300IMLDPDMHJBJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_OMGMGDIHDOH", kind: "scalar", jsonName: "Unk3300OMGMGDIHDOH", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IMLDPDMHJBJ: [], unk3300OMGMGDIHDOH: [], isOpen: false };
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
                case /* repeated uint32 Unk3300_IMLDPDMHJBJ = 12 [json_name = "Unk3300IMLDPDMHJBJ"];*/ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300IMLDPDMHJBJ.push(reader.uint32());
                    else
                        message.unk3300IMLDPDMHJBJ.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_OMGMGDIHDOH = 10 [json_name = "Unk3300OMGMGDIHDOH"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300OMGMGDIHDOH.push(reader.uint32());
                    else
                        message.unk3300OMGMGDIHDOH.push(reader.uint32());
                    break;
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
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
        /* repeated uint32 Unk3300_IMLDPDMHJBJ = 12 [json_name = "Unk3300IMLDPDMHJBJ"]; */
        if (message.unk3300IMLDPDMHJBJ.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300IMLDPDMHJBJ.length; i++)
                writer.uint32(message.unk3300IMLDPDMHJBJ[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_OMGMGDIHDOH = 10 [json_name = "Unk3300OMGMGDIHDOH"]; */
        if (message.unk3300OMGMGDIHDOH.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300OMGMGDIHDOH.length; i++)
                writer.uint32(message.unk3300OMGMGDIHDOH[i]);
            writer.join();
        }
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_2.WireType.Varint).bool(message.isOpen);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CityReputationQuestInfo
 */
exports.CityReputationQuestInfo = new CityReputationQuestInfo$Type();
