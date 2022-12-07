"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBlueprintBatchBriefMuipData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeBlueprintBriefMuipData_1 = require("./HomeBlueprintBriefMuipData");
// @generated message type with reflection information, may provide speed optimized methods
class HomeBlueprintBatchBriefMuipData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeBlueprintBatchBriefMuipData", [
            { no: 1, name: "brief_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HomeBlueprintBriefMuipData_1.HomeBlueprintBriefMuipData },
            { no: 2, name: "not_exist_share_code_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { briefList: [], notExistShareCodeList: [] };
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
                case /* repeated HomeBlueprintBriefMuipData brief_list */ 1:
                    message.briefList.push(HomeBlueprintBriefMuipData_1.HomeBlueprintBriefMuipData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated string not_exist_share_code_list */ 2:
                    message.notExistShareCodeList.push(reader.string());
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
        /* repeated HomeBlueprintBriefMuipData brief_list = 1; */
        for (let i = 0; i < message.briefList.length; i++)
            HomeBlueprintBriefMuipData_1.HomeBlueprintBriefMuipData.internalBinaryWrite(message.briefList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string not_exist_share_code_list = 2; */
        for (let i = 0; i < message.notExistShareCodeList.length; i++)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.notExistShareCodeList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeBlueprintBatchBriefMuipData
 */
exports.HomeBlueprintBatchBriefMuipData = new HomeBlueprintBatchBriefMuipData$Type();
