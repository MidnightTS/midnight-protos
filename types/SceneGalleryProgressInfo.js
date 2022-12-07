"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryProgressInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SceneGalleryProgressInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SceneGalleryProgressInfo", [
            { no: 3, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "ui_form", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "progress_stage_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "progress", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { key: "", uiForm: 0, progressStageList: [], progress: 0 };
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
                case /* string key */ 3:
                    message.key = reader.string();
                    break;
                case /* uint32 ui_form */ 12:
                    message.uiForm = reader.uint32();
                    break;
                case /* repeated uint32 progress_stage_list */ 7:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.progressStageList.push(reader.uint32());
                    else
                        message.progressStageList.push(reader.uint32());
                    break;
                case /* uint32 progress */ 13:
                    message.progress = reader.uint32();
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
        /* string key = 3; */
        if (message.key !== "")
            writer.tag(3, runtime_2.WireType.LengthDelimited).string(message.key);
        /* uint32 ui_form = 12; */
        if (message.uiForm !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.uiForm);
        /* repeated uint32 progress_stage_list = 7; */
        if (message.progressStageList.length) {
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.progressStageList.length; i++)
                writer.uint32(message.progressStageList[i]);
            writer.join();
        }
        /* uint32 progress = 13; */
        if (message.progress !== 0)
            writer.tag(13, runtime_2.WireType.Varint).uint32(message.progress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SceneGalleryProgressInfo
 */
exports.SceneGalleryProgressInfo = new SceneGalleryProgressInfo$Type();
