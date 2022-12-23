"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H5ActivityInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class H5ActivityInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("H5ActivityInfo", [
            { no: 2, name: "is_entrance_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_OBKEBDCKHJF", kind: "scalar", jsonName: "Unk3300OBKEBDCKHJF", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_DMBNFECAKBH", kind: "scalar", jsonName: "Unk3300DMBNFECAKBH", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "content_close_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "prefab_path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "begin_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "end_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isEntranceOpen: false, unk3300OBKEBDCKHJF: 0, unk3300DMBNFECAKBH: 0, contentCloseTime: 0, url: "", prefabPath: "", beginTime: 0, endTime: 0 };
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
                case /* bool is_entrance_open */ 2:
                    message.isEntranceOpen = reader.bool();
                    break;
                case /* uint32 Unk3300_OBKEBDCKHJF = 1 [json_name = "Unk3300OBKEBDCKHJF"];*/ 1:
                    message.unk3300OBKEBDCKHJF = reader.uint32();
                    break;
                case /* uint32 Unk3300_DMBNFECAKBH = 14 [json_name = "Unk3300DMBNFECAKBH"];*/ 14:
                    message.unk3300DMBNFECAKBH = reader.uint32();
                    break;
                case /* uint32 content_close_time */ 4:
                    message.contentCloseTime = reader.uint32();
                    break;
                case /* string url */ 3:
                    message.url = reader.string();
                    break;
                case /* string prefab_path */ 15:
                    message.prefabPath = reader.string();
                    break;
                case /* uint32 begin_time */ 5:
                    message.beginTime = reader.uint32();
                    break;
                case /* uint32 end_time */ 7:
                    message.endTime = reader.uint32();
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
        /* bool is_entrance_open = 2; */
        if (message.isEntranceOpen !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isEntranceOpen);
        /* uint32 Unk3300_OBKEBDCKHJF = 1 [json_name = "Unk3300OBKEBDCKHJF"]; */
        if (message.unk3300OBKEBDCKHJF !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300OBKEBDCKHJF);
        /* uint32 Unk3300_DMBNFECAKBH = 14 [json_name = "Unk3300DMBNFECAKBH"]; */
        if (message.unk3300DMBNFECAKBH !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.unk3300DMBNFECAKBH);
        /* uint32 content_close_time = 4; */
        if (message.contentCloseTime !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.contentCloseTime);
        /* string url = 3; */
        if (message.url !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.url);
        /* string prefab_path = 15; */
        if (message.prefabPath !== "")
            writer.tag(15, runtime_1.WireType.LengthDelimited).string(message.prefabPath);
        /* uint32 begin_time = 5; */
        if (message.beginTime !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.beginTime);
        /* uint32 end_time = 7; */
        if (message.endTime !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.endTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message H5ActivityInfo
 */
exports.H5ActivityInfo = new H5ActivityInfo$Type();
