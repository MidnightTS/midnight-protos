"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentQuestRandomInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ParentQuestRandomInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ParentQuestRandomInfo", [
            { no: 1, name: "factor_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "entrance_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "template_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { factorList: [], entranceId: 0, templateId: 0 };
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
                case /* repeated uint32 factor_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.factorList.push(reader.uint32());
                    else
                        message.factorList.push(reader.uint32());
                    break;
                case /* uint32 entrance_id */ 8:
                    message.entranceId = reader.uint32();
                    break;
                case /* uint32 template_id */ 15:
                    message.templateId = reader.uint32();
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
        /* repeated uint32 factor_list = 1; */
        if (message.factorList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.factorList.length; i++)
                writer.uint32(message.factorList[i]);
            writer.join();
        }
        /* uint32 entrance_id = 8; */
        if (message.entranceId !== 0)
            writer.tag(8, runtime_2.WireType.Varint).uint32(message.entranceId);
        /* uint32 template_id = 15; */
        if (message.templateId !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.templateId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ParentQuestRandomInfo
 */
exports.ParentQuestRandomInfo = new ParentQuestRandomInfo$Type();
