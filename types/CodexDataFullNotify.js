"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodexDataFullNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CodexTypeData_1 = require("./CodexTypeData");
// @generated message type with reflection information, may provide speed optimized methods
class CodexDataFullNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CodexDataFullNotify", [
            { no: 14, name: "type_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CodexTypeData_1.CodexTypeData },
            { no: 4, name: "last_read_pushtips_codex_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "last_read_pushtips_type_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "recent_viewed_pushtips_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { typeDataList: [], lastReadPushtipsCodexId: 0, lastReadPushtipsTypeId: 0, recentViewedPushtipsList: [] };
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
                case /* repeated CodexTypeData type_data_list */ 14:
                    message.typeDataList.push(CodexTypeData_1.CodexTypeData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 last_read_pushtips_codex_id */ 4:
                    message.lastReadPushtipsCodexId = reader.uint32();
                    break;
                case /* uint32 last_read_pushtips_type_id */ 13:
                    message.lastReadPushtipsTypeId = reader.uint32();
                    break;
                case /* repeated uint32 recent_viewed_pushtips_list */ 1:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.recentViewedPushtipsList.push(reader.uint32());
                    else
                        message.recentViewedPushtipsList.push(reader.uint32());
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
        /* repeated CodexTypeData type_data_list = 14; */
        for (let i = 0; i < message.typeDataList.length; i++)
            CodexTypeData_1.CodexTypeData.internalBinaryWrite(message.typeDataList[i], writer.tag(14, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 last_read_pushtips_codex_id = 4; */
        if (message.lastReadPushtipsCodexId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.lastReadPushtipsCodexId);
        /* uint32 last_read_pushtips_type_id = 13; */
        if (message.lastReadPushtipsTypeId !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.lastReadPushtipsTypeId);
        /* repeated uint32 recent_viewed_pushtips_list = 1; */
        if (message.recentViewedPushtipsList.length) {
            writer.tag(1, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.recentViewedPushtipsList.length; i++)
                writer.uint32(message.recentViewedPushtipsList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CodexDataFullNotify
 */
exports.CodexDataFullNotify = new CodexDataFullNotify$Type();
