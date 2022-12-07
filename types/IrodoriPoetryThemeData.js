"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriPoetryThemeData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriPoetryThemeData$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriPoetryThemeData", [
            { no: 14, name: "Unk3300_HFMKPNOBPDK", kind: "scalar", jsonName: "Unk3300HFMKPNOBPDK", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_CNNMEHOGGLL", kind: "scalar", jsonName: "Unk3300CNNMEHOGGLL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "theme_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "max_progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "Unk3300_HODJKKDBJDJ", kind: "scalar", jsonName: "Unk3300HODJKKDBJDJ", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_NJHMNLIAGIK", kind: "scalar", jsonName: "Unk3300NJHMNLIAGIK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300HFMKPNOBPDK: 0, unk3300CNNMEHOGGLL: [], progress: 0, themeId: 0, maxProgress: 0, unk3300HODJKKDBJDJ: [], unk3300NJHMNLIAGIK: 0 };
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
                case /* uint32 Unk3300_HFMKPNOBPDK = 14 [json_name = "Unk3300HFMKPNOBPDK"];*/ 14:
                    message.unk3300HFMKPNOBPDK = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_CNNMEHOGGLL = 10 [json_name = "Unk3300CNNMEHOGGLL"];*/ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300CNNMEHOGGLL.push(reader.uint32());
                    else
                        message.unk3300CNNMEHOGGLL.push(reader.uint32());
                    break;
                case /* uint32 progress */ 11:
                    message.progress = reader.uint32();
                    break;
                case /* uint32 theme_id */ 12:
                    message.themeId = reader.uint32();
                    break;
                case /* uint32 max_progress */ 7:
                    message.maxProgress = reader.uint32();
                    break;
                case /* repeated uint32 Unk3300_HODJKKDBJDJ = 15 [json_name = "Unk3300HODJKKDBJDJ"];*/ 15:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HODJKKDBJDJ.push(reader.uint32());
                    else
                        message.unk3300HODJKKDBJDJ.push(reader.uint32());
                    break;
                case /* uint32 Unk3300_NJHMNLIAGIK = 6 [json_name = "Unk3300NJHMNLIAGIK"];*/ 6:
                    message.unk3300NJHMNLIAGIK = reader.uint32();
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
        /* uint32 Unk3300_HFMKPNOBPDK = 14 [json_name = "Unk3300HFMKPNOBPDK"]; */
        if (message.unk3300HFMKPNOBPDK !== 0)
            writer.tag(14, runtime_2.WireType.Varint).uint32(message.unk3300HFMKPNOBPDK);
        /* repeated uint32 Unk3300_CNNMEHOGGLL = 10 [json_name = "Unk3300CNNMEHOGGLL"]; */
        if (message.unk3300CNNMEHOGGLL.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300CNNMEHOGGLL.length; i++)
                writer.uint32(message.unk3300CNNMEHOGGLL[i]);
            writer.join();
        }
        /* uint32 progress = 11; */
        if (message.progress !== 0)
            writer.tag(11, runtime_2.WireType.Varint).uint32(message.progress);
        /* uint32 theme_id = 12; */
        if (message.themeId !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.themeId);
        /* uint32 max_progress = 7; */
        if (message.maxProgress !== 0)
            writer.tag(7, runtime_2.WireType.Varint).uint32(message.maxProgress);
        /* repeated uint32 Unk3300_HODJKKDBJDJ = 15 [json_name = "Unk3300HODJKKDBJDJ"]; */
        if (message.unk3300HODJKKDBJDJ.length) {
            writer.tag(15, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HODJKKDBJDJ.length; i++)
                writer.uint32(message.unk3300HODJKKDBJDJ[i]);
            writer.join();
        }
        /* uint32 Unk3300_NJHMNLIAGIK = 6 [json_name = "Unk3300NJHMNLIAGIK"]; */
        if (message.unk3300NJHMNLIAGIK !== 0)
            writer.tag(6, runtime_2.WireType.Varint).uint32(message.unk3300NJHMNLIAGIK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriPoetryThemeData
 */
exports.IrodoriPoetryThemeData = new IrodoriPoetryThemeData$Type();
