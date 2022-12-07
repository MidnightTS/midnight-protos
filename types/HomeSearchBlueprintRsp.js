"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeSearchBlueprintRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HomeBlueprintSearchInfo_1 = require("./HomeBlueprintSearchInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HomeSearchBlueprintRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeSearchBlueprintRsp", [
            { no: 4, name: "search_info", kind: "message", T: () => HomeBlueprintSearchInfo_1.HomeBlueprintSearchInfo },
            { no: 8, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0 };
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
                case /* HomeBlueprintSearchInfo search_info */ 4:
                    message.searchInfo = HomeBlueprintSearchInfo_1.HomeBlueprintSearchInfo.internalBinaryRead(reader, reader.uint32(), options, message.searchInfo);
                    break;
                case /* int32 retcode */ 8:
                    message.retcode = reader.int32();
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
        /* HomeBlueprintSearchInfo search_info = 4; */
        if (message.searchInfo)
            HomeBlueprintSearchInfo_1.HomeBlueprintSearchInfo.internalBinaryWrite(message.searchInfo, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 8; */
        if (message.retcode !== 0)
            writer.tag(8, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeSearchBlueprintRsp
 */
exports.HomeSearchBlueprintRsp = new HomeSearchBlueprintRsp$Type();
